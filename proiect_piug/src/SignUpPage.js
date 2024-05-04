import React, { useState } from 'react';

function SignUpPage() {
    // State to manage form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform email and password validation
        if (validateEmail(email) && validatePassword(password)) {
            // If both email and password are valid, proceed with sign up
            alert('Sign up successful!');
            // Reset form fields
            setEmail('');
            setPassword('');
            setIsValidEmail(true);
            setIsValidPassword(true);
        } else {
            // If email or password is invalid, show error message
            alert('Please enter a valid email and password!');
        }
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    // Function to validate password format
    const validatePassword = (password) => {
        const re = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    // Function to handle email input change
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        // Check if email is valid
        setIsValidEmail(validateEmail(emailValue));
    };

    // Function to handle password input change
    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        // Check if password is valid
        setIsValidPassword(validatePassword(passwordValue));
    };

    return (
        <div className="container mt-4">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className={`form-control ${isValidEmail ? '' : 'is-invalid'}`} id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                    {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className={`form-control ${isValidPassword ? '' : 'is-invalid'}`} id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
                    {!isValidPassword && <div className="invalid-feedback">Password must contain at least 8 characters, including one uppercase letter and one special character.</div>}
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;
