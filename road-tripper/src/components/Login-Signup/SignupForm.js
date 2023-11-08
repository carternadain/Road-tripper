import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server to handle user registration
      const response = await axios.post('/signup', userData);

      // Handle the response, e.g., redirect to a success page or provide feedback to the user
    } catch (error) {
      setError('Registration failed. Please check your input and try again.');
      // Handle the error, display an error message, etc.
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;

