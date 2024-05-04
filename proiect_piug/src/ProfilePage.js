import React, { useState } from 'react';

function ProfilePage() {
    // State to manage user information
    const [username, setUsername] = useState('Adrian Badea');
    const [email, setEmail] = useState('badeaadrian@example.com');
    const [bio, setBio] = useState('Software engineer passionate about web development.');
    const [isValidEmail, setIsValidEmail] = useState(true);

    // Function to handle form submission for editing profile
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate email and bio
        if (validateEmail(email) && validateBio(bio)) {
            // Proceed with updating profile
            alert('Profile updated successfully!');
        } else {
            // Show error if email or bio is invalid
            alert('Please enter a valid email and ensure the bio has at least 100 characters!');
        }
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        const isValid = re.test(email);
        setIsValidEmail(isValid);
        return isValid;
    };

    // Function to validate bio length
    const validateBio = (bio) => {
        return bio.trim().length === 0 || bio.trim().length >= 100;
    };

    return (
        <div className="container mt-4">
            <h1>User Profile</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Username</h5>
                    <p className="card-text">{username}</p>
                    <h5 className="card-title">Email</h5>
                    <p className={`card-text ${isValidEmail ? '' : 'text-danger'}`}>{email}</p>
                    {!isValidEmail && <p className="text-danger">Please enter a valid email address.</p>}
                    <h5 className="card-title">Bio</h5>
                    <p className="card-text">{bio}</p>
                    {/* Edit Profile Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className={`form-control ${isValidEmail ? '' : 'is-invalid'}`} id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control" id="bio" rows="3" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
