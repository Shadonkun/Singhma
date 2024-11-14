import React, { createContext, useContext, useState, ReactNode } from "react";

interface PointsContextType {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  incrementPoints: (value: number) => void;
  decrementPoints: (value: number) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

// Hook to use the Points Context
export const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
};

// Context Provider Component
export const PointsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [points, setPoints] = useState<number>(() => {
      const storedPoints = localStorage.getItem("points");
      return storedPoints ? parseInt(storedPoints, 10) : 0;
    });
  
    const incrementPoints = (value: number) => {
      setPoints((prev) => {
        const newPoints = prev + value;
        localStorage.setItem("points", newPoints.toString());
        return newPoints;
      });
    };
  
    const decrementPoints = (value: number) => {
      setPoints((prev) => {
        const newPoints = Math.max(0, prev - value);
        localStorage.setItem("points", newPoints.toString());
        return newPoints;
      });
    };
  
    return (
      <PointsContext.Provider value={{ points, setPoints, incrementPoints, decrementPoints }}>
        {children}
      </PointsContext.Provider>
    );
  };
  
