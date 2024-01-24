// Login.js
import React from 'react';
import { Link } from 'react-router-dom';

const loginStyles = {
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

const Login = () => {
  return (
    <div style={loginStyles.container}>
      <div style={loginStyles.formContainer}>
        <h2>Login</h2>
        <form>
          <div style={loginStyles.formGroup}>
            <div style={loginStyles.inputGroup}>
              <label style={loginStyles.label}>Email:</label>
              <input style={loginStyles.input} type="email" />
            </div>
            <div style={loginStyles.inputGroup}>
              <label style={loginStyles.label}>Password:</label>
              <input style={loginStyles.input} type="password" />
            </div>
          </div>
          <button style={loginStyles.button} type="submit">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup" style={loginStyles.link}>Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
