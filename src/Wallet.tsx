// src/App.tsx

import React from 'react';
import './Wallet.css';
import SigmaCoin from './images/sigmacoin.png';
import Tonlogo from './images/ton-logo.png';
import { usePoints } from './PointsContext';
import { useNavigate } from 'react-router-dom';

const Wallet: React.FC = () => {
    const { points } = usePoints();
    
    const navigate = useNavigate();  // Hook to navigate between routes
    
    const handleReadyToFarm = () => {
        navigate('/app');  // This navigates to NewComponent
    };

    const handleTask = () => {
        navigate('/earn');  // This navigates to NewComponent
    };

  return (
    <div className="app-container">
      <header className="header">
        <h1 >Get crypto.<br/> Earn and buy any tokens.</h1>
        <button className="connect-wallet">Connect wallet</button>
      </header>

      <div className="points-section">
        <h2 style={{width: 'full'}}>Cash <span className="points-balance">$0</span></h2>
        

        <div className="tabs">
          <button className="tab active">Balances</button>
          <button className="tab">History</button>
        </div>

        <div className="card-earn" onClick={handleTask}>
          <div className="card-content">
            <img src={Tonlogo} className="w-7 mr-5" />
            <div className="card-text">
              <p>Earn more in game,<br/> Tasks and Quests.</p>
            </div>
          </div>
          <span className="arrow">→</span>
        </div>

        <div className="card-point" >
          <div className="card-content">
            <img src={SigmaCoin} className="w-6 mr-5"/>
            <div className="card-text">
              <p>Sigma points</p>
              <p>{points}</p>
            </div>
          </div>
          <button className="status-button" onClick={handleReadyToFarm}>Ready to farm</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

