import React, { useState } from "react";

import "../assets/css/header.css";

import Logo from "../assets/images/cc_logo.jpg";
import User from "../assets/images/userLogo.jpg";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [click, setclick] = useState(false);
  const clickHandler = () => {
    setclick((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt="logo" className="imageLogo" />
        <nav>
          <ul className={click ? "navbar active" : "navbar"}>
            <li className="lists">Dashboard</li>
            <li className="lists">Learning Zone</li>
            <li className="lists">Experience Zone</li>
            <div className="userHamb">
              <img src={User} alt="user" className="userLogo" />
              <span className="username">Jenny</span>
            </div>
          </ul>
        </nav>
      </div>
      <div className="right">
        <button className="btn">Discovery Zone</button>
        <div className="user">
          <img src={User} alt="user" className="userLogo" />
          <span className="username">Jenny</span>
        </div>
        <div className="icons">
          {!click && <FaBars className="icon" onClick={clickHandler} />}
          {click && <AiOutlineClose className="icon" onClick={clickHandler} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
