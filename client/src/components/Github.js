import React, { useState, useEffect } from "react";


const gitHubUrl = "https://api.github.com/users/enriqueeliud";

function Github() {
  const [userData, setUserData] = useState({});
  
 
  useEffect(() => {
    getGitHubUserWithFetch();
  
  }, []);

  const getGitHubUserWithFetch = async () => {
     const response = await fetch(gitHubUrl);
     const jsonData = await response.json();
    setUserData(jsonData);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>

  
    </div>
  );
}

export default Github;
