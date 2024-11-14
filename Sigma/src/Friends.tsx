import { useNavigate } from 'react-router-dom';  // Import navigation hook
import Friend from './images/friends1.png';
import './Friends.css';

const Friends = () => {

    const navigate = useNavigate();  // Hook to navigate between routes

    const handleNavigate = () => {
        navigate('/invitation');  // This navigates to NewComponent
    };

    return (
        <div className="bg-black flex justify-center">
            <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
                <div className="justify content-center">
                    <div className="justify-center align-center bg-[#000]">
                        <div className="text-center flex justify-center w-auto">
                            <img src={Friend} className="w-[90%] mt-7 "/>
                        </div>
                        <div className="flex justify-around mt-2.5 w-auto">
                            <p className="text-4xl" style={{fontWeight: 500, letterSpacing:4 }}>Invite Friends</p>
                        </div>
                        <div className=" flex justify-around mt-1.5 w-auto ">
                            <p className="text-4xl" style={{fontWeight: 500, letterSpacing:3}}>Earn Together</p>
                        </div>
                    </div>
                    <div className="vertical-line-container">
                        <div className="flex align text-center ">
                            <div className="circle">
                                <p className="share" style={{fontWeight: 500,}}>Share your invitation link </p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                        <p className="share" style={{fontWeight: 500, marginLeft: -60}}>Your Friends Join Sigma </p>
                        </div>
                        <div className="line"></div>
                        <div className="circle">
                        <p className="share" style={{fontWeight: 500, marginBottom: 70}}>You start Earning</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="fixed bottom-10 w-full bg-[#000] h-40 flex justify-around items-center">
                <div className="invite-bar-container" onClick={handleNavigate}>
                    <p className="font-bold text-2xl text-black " style={{fontFamily: 'Archivo'}}>Invite</p>
                </div>
            </div>
        </div>
    );
};

export default Friends;
