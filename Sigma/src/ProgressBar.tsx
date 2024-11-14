import React from 'react';
import './ProgressBar.css'
import { usePoints } from "./PointsContext";
import { useProgress } from './ProgressContext';

const ProgressBar: React.FC = () => {
  const { progress, isStarted, startProgress, resetProgress } = useProgress();
  const {points, incrementPoints, decrementPoints } = usePoints();

  // Handle claim action and reset progress bar
  const handleClaim = (event:React.MouseEvent) => {
    event.stopPropagation(); //Prevent triggering start automatically
    resetProgress(); // Reset progress to 0
    incrementPoints(10);
  };

  return (
    <div className="progress-bar-container" onClick={() => !isStarted && startProgress()} style={{ position: 'relative', cursor: 'pointer' }}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress}%`,
          backgroundColor: progress === 100 ? '[#baee52]' : '[#5e5e5e]',
          transition: 'width 0.1s ease-in-out',
          height: '100%',
        }}
      ></div>

      {/*Display percentage or "Claim" button centered in the containe*/}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '1.3em'
      }}>
        
        {progress >= 100 ? (
          <button onClick={handleClaim} className="claim-button" style={{
            background: 'none',
            border: 'none',
            color: 'black',
            fontWeight: '800',
            cursor: 'pointer',
          }}>
            Claim 
          </button>
        ) : (
          `${ progress >=1 ? (
            progress.toFixed(2)
          ) :(`Start`)}`
        )}
      </div>
      <p>{points}</p>
    </div>
    );
};

export default ProgressBar;
