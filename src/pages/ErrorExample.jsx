import React, { useState } from 'react';

function ErrorExample() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    const newErrors = {};
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Submit logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div>{errors.username}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ErrorExample;
