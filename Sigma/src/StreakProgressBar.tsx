import React, { useState, useEffect } from "react";
import "./StreakProgressBar.css";

const StreakProgressBar: React.FC = () => {
  const MAX_STREAK = 7; // Goal for a streak (e.g., 7 days)
  const today = new Date().toDateString(); // Unique identifier for each day

  const [streak, setStreak] = useState<number>(0);
  const [lastLogin, setLastLogin] = useState<string>("");

  // Initialize streak from localStorage
  useEffect(() => {
    const storedStreak = Number(localStorage.getItem("streak") || 0);
    const storedLastLogin = localStorage.getItem("lastLogin") || "";

    if (storedLastLogin === today) {
      // User already logged in today
      setStreak(storedStreak);
      setLastLogin(storedLastLogin);
    } else if (storedLastLogin) {
      // Check if the last login was yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (storedLastLogin === yesterday.toDateString()) {
        // Increment streak
        const newStreak = Math.min(storedStreak + 1, MAX_STREAK);
        setStreak(newStreak);
        localStorage.setItem("streak", String(newStreak));
      } else {
        // Reset streak
        setStreak(1);
        localStorage.setItem("streak", "1");
      }
    } else {
      // First login
      setStreak(1);
      localStorage.setItem("streak", "1");
    }

    setLastLogin(today);
    localStorage.setItem("lastLogin", today);
  }, [today]);

  // Progress percentage
  const progressPercentage = (streak / MAX_STREAK) * 100;

  return (
    <div className="streak-container">
      <h2 className="ml-[-100px] mt-[-20px]">Login Streak</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progressPercentage}%`,
          }}
        >
          {streak > 0 && (
            <span className="progress-text">{streak} / {MAX_STREAK}</span>
          )}
        </div>
      </div>
      {streak === MAX_STREAK && <p className="streak-message">🎉 Goal Reached! Keep it up! 🎉</p>}
    </div>
  );
};

export default StreakProgressBar;
