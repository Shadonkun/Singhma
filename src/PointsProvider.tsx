import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PointsContextType {
  points: number;
  setPoints: (value: number) => void;
  incrementPoints: (value: number) => void;
  decrementPoints: (value: number) => void;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const usePoints = (): PointsContextType => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
};

export const PointsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState<number>(() => {
    // Load from local storage on initial render
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });

  useEffect(() => {
    // Save to local storage whenever points change
    localStorage.setItem("points", points.toString());
  }, [points]);

  const incrementPoints = (value: number) => setPoints((prev) => prev + value);
  const decrementPoints = (value: number) => setPoints((prev) => Math.max(prev - value, 0));

  return (
    <PointsContext.Provider value={{ points, setPoints, incrementPoints, decrementPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
