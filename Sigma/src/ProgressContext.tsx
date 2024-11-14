import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  progress: number;
  isStarted: boolean;
  startProgress: () => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const totalDuration = 10 * 1000; // 4 hours in milliseconds

  useEffect(() => {
    // Retrieve start time and isStarted from localStorage
    const savedStartTime = localStorage.getItem('startTime');
    const savedIsStarted = localStorage.getItem('isStarted');

    if (savedIsStarted === 'true' && savedStartTime) {
      const startTime = parseInt(savedStartTime, 10);
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime >= totalDuration) {
        setProgress(100);
        setIsStarted(false);
        localStorage.removeItem('isStarted'); // Clear isStarted when progress reaches 100%
      } else {
        const calculatedProgress = (elapsedTime / totalDuration) * 100;
        setProgress(calculatedProgress);
        setIsStarted(true);
      }
    }
  }, [totalDuration]);

  useEffect(() => {
    if (isStarted && progress < 100) {
      const interval = setInterval(() => {
        const savedStartTime = localStorage.getItem('startTime');
        if (savedStartTime) {
          const startTime = parseInt(savedStartTime, 10);
          const elapsedTime = Date.now() - startTime;
          const calculatedProgress = Math.min((elapsedTime / totalDuration) * 100, 100);

          if (calculatedProgress >= 100) {
            setProgress(100);
            setIsStarted(false);
            clearInterval(interval);
            localStorage.removeItem('isStarted'); // Clear isStarted when progress reaches 100%
          } else {
            setProgress(calculatedProgress);
          }
        }
      }, 1000); // Update every second to reflect real-time changes

      return () => clearInterval(interval);
    }
  }, [isStarted, progress, totalDuration]);

  const startProgress = () => {
    // Start progress only if it hasn't already started
    if (!isStarted) {
      setIsStarted(true);
      localStorage.setItem('isStarted', 'true');
      localStorage.setItem('startTime', Date.now().toString());
    }
  };

  const resetProgress = () => {
    setProgress(0);
    setIsStarted(false);
    localStorage.removeItem('isStarted');
    localStorage.removeItem('startTime');
  };

  return (
    <ProgressContext.Provider value={{ progress, isStarted, startProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
