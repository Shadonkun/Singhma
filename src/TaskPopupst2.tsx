import React, { useState } from "react";
import "./TaskPopupst2.css";

interface TaskPopupProps {
  onClose: () => void; // Function to close the popup
}

const TaskPopupst2: React.FC<TaskPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <h3 className="text-white">Special Task 2</h3>
        <p className="text-white" >Here you can add tasks or show task information.</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskPopupst2;
