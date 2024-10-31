import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './login/login.css';
import LoginPage from './login/login';
import './signup/signup.css';
import SignupPage from './signup/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
