import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email.trim() === '') {
      setMessage('Please enter your email.');
      return;
    }

    setMessage('Reset link sent to ' + email);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: '',
        height: '100vh',
      }}
    >
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div id="message">{message}</div>
    </div>
  );
};

export default ForgotPassword;

