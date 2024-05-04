import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DiscussionPage from "./DiscussionPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import MainContent from "./MainContent";

// Navbar component
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/challenges">Coding Challenges</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/challenges">Challenges</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/discussions">Discussions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary" to="/signup">Sign Up / Log In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


// App component
function App() {
    return (
        <Router>
            <div>
                <Navbar />
                {/* Routes */}
                <Routes>
                    <Route path="/challenges" element={<MainContent />} />
                    <Route path="/discussions" element={<DiscussionPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </div>
        </Router>
    );
}


export default App;
