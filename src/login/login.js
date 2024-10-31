import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import backgroundImage from '../assest/backgroun-img.png'; // Path to the combined left-side image
const { FaGoogle, FaSteam } = require('react-icons/fa');
const { AiOutlineEye } = require('react-icons/ai');




const Login = () => {

  return (
    <div className="login-container">
      {/* Left section for background image */}
      <div className="image-section" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Right section for login form */}
      <div className="form-section">
        <div className='form'>
          <h2 className="sign-in-title">SIGN IN</h2>
          <p className="sign-in-subtitle">Please login to continue to your account.</p>

          <form>
            <input type="email" placeholder="EMAIL" className="input-field" />
            <div className="password-field">
              <input type="password" placeholder="PASSWORD" className="input-field" />
              <AiOutlineEye className="password-toggle" />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Keep me logged in
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="sign-in-button">SIGN IN</button>
            <div className="divider">OR</div>
            <div className="social-sign-in">
              <button className="google-button"><FaGoogle /> Sign in with Google</button>
              <button className="steam-button"><FaSteam /> Sign in with Steam</button>
            </div>
            <p className="create-account">
              Need an account? <Link to="/signup" className="create-one-link">Create one</Link>
            </p>
          </form>

          <p className="terms">
            By logging in, you confirm that you have read and understood the Terms of Service, that
            you are at least 18 years old and that you are not a resident of any Restricted Territories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;