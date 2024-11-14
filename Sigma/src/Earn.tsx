import React from 'react';
import { useState } from "react";
import './Earn.css';
import StreakProgressBar from './StreakProgressBar';
import TaskPopupst1 from "./TaskPopupst1.tsx";
import TaskPopupst2 from "./TaskPopupst2.tsx";
import TaskPopupst3 from "./TaskPopupst3.tsx";
import TaskPopupSocial from "./TaskPopupsocial.tsx";

const Earn: React.FC = () => {

    const [showPopupst1, setShowPopupst1] = useState(false);
    const [showPopupst2, setShowPopupst2] = useState(false);
    const [showPopupst3, setShowPopupst3] = useState(false);
    const [showPopupSocial, setShowPopupsocial] = useState(false);

  return (
    <div className="earn-page">
      <h1 className="earn-title">
        Earn
      </h1>

      {/* Horizontal Scrolling Container */}
      <div className="horizontal-scroll">
        {/* First Card */}
        <div className="earn-card">
          <div className="weekly-content">
            <h3 className="ml-[-100px]">Special Task 1</h3>
            <p className="card-bonus">+500 SP</p>
            <button onClick={() => setShowPopupst1(true)} className="earn-card-button">Open</button>
          </div>
        </div>

        {/* Second Card */}
        <div className="earn-card">
          <div className="weekly-content">
            <p className="ml-[-100px]">Special Task 2</p>
            <p className="card-bonus">+500 SP</p>
            <button onClick={() => setShowPopupst2(true)} className="earn-card-button">Open</button>
          </div>
        </div>

        {/* Add more cards as needed */}
        <div className="earn-card">
          <div className="weekly-content">
            <h3 className="ml-[-100px]">Another Task</h3>
            <p className="card-bonus">+500 SP</p>
            <button onClick={() => setShowPopupst3(true)} className="earn-card-button">Open</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Weekly</h2>

      <div className="weekly-grid">
        <div className="horizontal-scroll">
            {/* Weekly Card */}
            <div className="weekly-card">
            <div className="weekly-content">
                <div className="streak-bar-container">
                    <StreakProgressBar/>
                </div>
                
                <button className="card-button">Claim</button>
            </div>
            </div>
            <div className="weekly-card">
            <div className="weekly-content">
                <div className="streak-bar-container">
                    <p className="ml-[-50px] mb-[30px]">Earn Social Checkin'</p>
                </div>
                <p className="weekly-bonus">+0/450 SP</p>
                <button onClick={() => setShowPopupsocial(true)} className="card-button-social">Open</button>
            </div>
            </div>
        </div>
      {showPopupst1 && <TaskPopupst1 onClose={() => setShowPopupst1(false)} />}
      {showPopupst2 && <TaskPopupst2 onClose={() => setShowPopupst2(false)} />}
      {showPopupst3 && <TaskPopupst3 onClose={() => setShowPopupst3(false)} />}
      {showPopupSocial && <TaskPopupSocial onClose={() => setShowPopupsocial(false)} />}
        </div>
    </div>
  );
};

export default Earn;
