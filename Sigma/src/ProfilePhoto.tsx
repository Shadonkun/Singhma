import React, { useState, useEffect, useRef } from 'react';
import './ProfilePhoto.css';  // Import the CSS file

const ProfilePhoto = () => {
    const [photo, setPhoto] = useState<string | null>(() => {  //*retrieve photo from localstorage on load*//
        return localStorage.getItem('profilePhoto');
    });

    const fileInputRef = useRef<HTMLInputElement | null>(null); //Ref to the hidden file input

    //Handle file upload
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result as string;
                setPhoto(base64Image);
                localStorage.setItem('profilePhoto', base64Image); //Save photo to localstorage
            };
            reader.readAsDataURL(file);
        }
    };

    //Function to trigger the file input when the user clicks on the profile photo
    const handlePhotoClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); //Trigger click on the hidden input element
        }
    };

    return (
        <div className="container">
            <div className="image-container" onClick={handlePhotoClick}>
                {photo ? (
                    <img src={photo} alt="Profile" className="profile-image" />
                ) : (
                    <p>No photo uploaded</p>
                )}
            </div>
            {/*Hidden file input*/}
            <input type="file" accept="image/*" onChange={handlePhotoChange} style={{display:'none'}} ref={fileInputRef}/>
        </div>
    );
};

export default ProfilePhoto;
