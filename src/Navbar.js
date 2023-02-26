import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [openContainer, setOpenContainer] = useState(false);
  const linkRefContainer = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const length = linkRefContainer.current.getBoundingClientRect().height;
    console.log(length);

    if (openContainer) {
      linkRefContainer.current.style.height = `${length}px`;
    } else {
      linkRefContainer.current.style.height = "0px";
    }
  }, [openContainer]);

  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="nav-toggle"
          onClick={() => setOpenContainer(!openContainer)}
        >
          <FaBars />
        </button>
      </div>

      <div className="links-container" ref={linkRefContainer}>
        <ul className="links" ref={linkRef}>
          {links.map((link) => {
            const { url, text, id } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="social-icons">
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
