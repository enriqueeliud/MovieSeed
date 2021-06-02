import React, { useState } from "react";

export const Create = () => {
  var [Title, setTitle] = useState();
  var [Creator, setCreator] = useState();
  var [Body, setBody] = useState();
  var [Views, setViews] = useState();
  var [Likes, setLikes] = useState();

  const TitleUpdate = (event) => {
    setTitle(event.target.value);
  };
  const CreatorUpdate = (event) => {
    setCreator(event.target.value);
  };
  const ViewsUpdate = (event) => {
    setViews(event.target.value);
  };
  const BodyUpdate = (event) => {
    setBody(event.target.value);
  };
  const LikesUpdate = (event) => {
    setLikes(event.target.value);
  };
  const handleSubmit = () => {
    // Once the form has been submitted, this function will post to the backend
    const postURL = "/blog/create"; //Our previously set up route in the backend
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        Title: Title,
        Creator:Creator,
        Body:Body,
        clockedIn: false,
        Views:Views,
        Likes:Likes,
        dates: [],
      }),
    }).then(() => {
      // Once posted, the user will be notified
      alert("You have been added to the system!");
    });
  };

  return (
    <div className="blogpost">
      <form onSubmit={handleSubmit}>
        <>
          <label>Title:</label>
          <input required onChange={TitleUpdate}></input>
        </>
        <>
          <label>Creator:</label>
          <input required onChange={CreatorUpdate}></input>
        </>
        <>
          <label>Body:</label>
          <input required onChange={BodyUpdate}></input>
        </>
        <>
          <label>Views:</label>
          <input required onChange={ViewsUpdate}></input>
        </>
        <>
          <label>Likes:</label>
          <input required onChange={LikesUpdate}></input>
        </>

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Create;

