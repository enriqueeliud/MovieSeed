import React, { useState, useEffect } from "react";

const userUrl = "/users/users";

function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(userUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>User Reviews</h2>
      </header>

      <div className="user-container">
        <ul className="infoclass">
          <h3>first Name</h3>
          <h3>last Name</h3>
          <h3>email</h3>
          <h3>username</h3>
          <h3>Review</h3>
          {userData.map((user, index) => (
            <>
              <li className="info" key={user.index}>
                firstname:{user.firstName}
              </li>
              <li className="info" key={user.index}>
                lastname:{user.lastName}
              </li>
              <li className="info" key={user.index}>
                email:{user.email}
              </li>
              <li className="info" key={user.index}>
                username:{user.userName}
              </li>
              <li className="info" key={user.index}>
                review:{user.review}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
