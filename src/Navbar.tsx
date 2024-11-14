import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import navigation hook
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faWallet, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Layout: React.FC = () => {

    const [activeIcon, setActiveIcon] = useState<number | null>(null);  //state to track the currently active icon
  
  const handleIconClick = (iconId:number): void => {
    setActiveIcon(iconId);  //Set only the clicked icon as active
  } //Function to handle click events

  const navigate = useNavigate();  // Hook to navigate between routes

  const handleHome = () => {
    navigate('/app');  // This navigates to NewComponent
  };

  const handleFriends = () => {
    navigate('/friends');  // This navigates to NewComponent
  };

  const handleWallet = () => {
    navigate('/wallet');  // This navigates to NewComponent
  };
  const handleEarn =() => {
    navigate('/earn');
  }


  return (
    <div className="w">
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%)] max-w-xl bg-[#000] flex justify-around items-center z-50 rounded-1xl text-xs">
          <div className="text-center text-[#85827d] w-1/5 bg-[] m-1 p-2 rounded-2xl" onClick={handleHome}>
              <FontAwesomeIcon icon={faHome} className={`w-8 h-8 ${activeIcon === 1 ? 'active' : ''}`} onClick={() => handleIconClick(1)} size="2x" />
              <p className={`mt-0.1 ${activeIcon === 1 ? 'active' : ''}`}>Home</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5 bg-[] m-1 p-2 rounded-2xl" onClick={handleEarn}>
              <FontAwesomeIcon icon={faDatabase} className={`w-8 h-8 ${activeIcon === 2 ? 'active' : ''}`} onClick={() => handleIconClick(2)} size="2x" />
              <p className={`mt-0.1 ${activeIcon === 2 ? 'active' : ''}`}>Earn</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5 bg-[] m-1 p-2 rounded-2xl" onClick={handleFriends}>
              <FontAwesomeIcon icon={faUsers} className={`w-8 h-8 ${activeIcon === 3 ? 'active' : ''}`} onClick={() => handleIconClick(3)} size="2x" />
              <p className={`mt-0.1 ${activeIcon === 3 ? 'active' : ''}`}>Friends</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5 bg-[] m-1 p-2 rounded-2xl" onClick={handleWallet}>
              <FontAwesomeIcon icon={faWallet} className={`w-8 h-8 ${activeIcon === 4 ? 'active' : ''}`} onClick={() => handleIconClick(4)} size="2x" />
              <p className={`mt-0.1 ${activeIcon === 4 ? 'active' : ''}`}>Wallet</p>
          </div>
        </div>
        <div className="content">
            <Outlet />
        </div>
    </div>
  );
};

export default Layout;
