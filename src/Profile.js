import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, []);

  return (
    <div className="profile_container">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
