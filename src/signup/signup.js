import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import backgroundImage from '../assest/signup-background.png'; // Path to the combined left-side image
const { FaGoogle, FaSteam } = require('react-icons/fa');
//const { AiOutlineEye } = require('react-icons/ai');




const signup = () => {

  return (
    <div className="login-container">
      {/* Left section for background image */}
      <div className="image-section" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Right section for login form */}
      <div className="form-section">
        <div className='form'>
          <h2 className="sign-in-title">SIGN UP</h2>
          <p className="sign-in-subtitle">Join ItemBet Now And GetStarted</p>

          <form>
            <input type="email" placeholder="EMAIL" className="input-field" />
            <div className="password-field">
              <input type="password" placeholder="PASSWORD" className="input-field" />
            </div>
            <input type="password" placeholder="CONFIRM PASSWORD" className="input-field" />
            <button type="submit" className="sign-in-button">SIGN UP</button>
            <div className="divider">OR</div>
            <div className="social-sign-in">
              <button className="google-button"><FaGoogle /> Join with Google</button>
              <button className="steam-button"><FaSteam /> Join with Steam</button>
            </div>
            <p className="create-account">
              Already have an account? <Link to="/login" className="create-one-link">SIGN IN</Link>
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

export default signup;