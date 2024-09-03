import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details-container">
      <h2>Welcome, {user.username || user.email}!</h2>
      <p>
        {user.username
          ? `Signed up at: ${user.signupTime}`
          : `Logged in at: ${user.loginTime}`}
      </p>
    </div>
  );
};

export default UserDetails;
