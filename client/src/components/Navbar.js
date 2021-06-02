import React from 'react'
import {Link} from 'react-router-dom'
import child from '../static/images/child.jpeg'
import boys from "../static/images/boys.jpg";
import vikings from "../static/images/vikings.jpg";
import blacklist from "../static/images/blacklist.jpg";
import blackpanther from "../static/images/blackpanther.jpg";
import the100 from "../static/images/100.jpg";
import outpost from "../static/images/outpost.jpg";
import breaking from "../static/images/breaking.jpg";

function Navbar() {
  return (
    <>
      <div className="movielist">
        <ul>
          <h3>A-Z</h3>
          <li>
            <Link to="#">Absentia</Link>
          </li>
          <li>
            <Link to="#">AmericaHeroes</Link>{" "}
          </li>
          <li>
            <Link to="#">BreakingBad</Link>
          </li>
          <li>
            <Link to="#">Blacklist</Link>
          </li>
          <li>
            <Link to="#">Blindspot</Link>
          </li>
          <li>
            <Link to="#">Friends</Link>
          </li>
          <li>
            <Link to="#">Salvation</Link>
          </li>
          <li>
            <Link to="#">Vikings</Link>
          </li>
          <li>
            <Link to="#">Blindspot</Link>
          </li>
          <li>
            <Link to="#">GameofThrones</Link>
          </li>
          <li>
            <Link to="#">VampireDiaries</Link>
          </li>
          <li>
            <Link to="#">TheBoys</Link>
          </li>
          <li>
            <Link to="#">The100</Link>
          </li>
          <li>
            <Link to="#">TheOriginals</Link>
          </li>
          <li>
            <Link to="#">WentWorth</Link>
          </li>
          <li>
            <Link to="#">PrisonBreak</Link>
          </li>
        </ul>
      </div>

      <h2>Latest episodes</h2>
      <div className="post">
        <img src={child} alt="" />
        <img src={blacklist} alt="" />
        <img src={blackpanther} alt="" />
        <img src={vikings} alt="" />
        <img src={boys} alt="" />
        <img src={the100} alt="" />
        <img src={outpost} alt="" />
        <img src={breaking} alt="" />
      </div>
    </>
  );
}

export default Navbar;
