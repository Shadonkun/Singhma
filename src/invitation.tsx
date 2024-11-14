import { useNavigate } from 'react-router-dom';  // Import navigation hook

const Invitation = () => {

    const navigate = useNavigate();  // Hook to navigate between routes

    const handleNavigate = () => {
        navigate('/');  // This navigates to NewComponent
    };

    return (
        <div className="bg-black w-full h-screen text-white">
            <p className="text-3xl">Invitation!</p>
            <button className="text-3xl" onClick={handleNavigate}>Go to Home</button>
        </div>
    );
};

export default Invitation;