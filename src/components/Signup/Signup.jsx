// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';

const signupStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#4caf50',
  },
};

const Signup = () => {
  return (
    <div style={signupStyles.container}>
      <div style={signupStyles.formContainer}>
        <h2>Signup</h2>
        <form>
          <div style={signupStyles.formGroup}>
            <div style={signupStyles.inputGroup}>
              <label style={signupStyles.label}>Name:</label>
              <input style={signupStyles.input} type="text" />
            </div>
            <div style={signupStyles.inputGroup}>
              <label style={signupStyles.label}>Email:</label>
              <input style={signupStyles.input} type="email" />
            </div>
            <div style={signupStyles.inputGroup}>
              <label style={signupStyles.label}>Password:</label>
              <input style={signupStyles.input} type="password" />
            </div>
          </div>
          <button style={signupStyles.button} type="submit">
            Signup
          </button>
          <p>
            Already have an account? <Link to="/login" style={signupStyles.link}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
