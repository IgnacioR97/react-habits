import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="nav-toggle" onClick={() => console.log("lol")}>
          <FaBars />
        </button>
      </div>
      <div className="links-container">
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
