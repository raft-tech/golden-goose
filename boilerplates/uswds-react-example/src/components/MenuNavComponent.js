import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const MenuNavComponent = () => {
  const dropdownRef = useRef(null);
    const [isWideWidth, setWideWidth] = useState(window.innerWidth < 800);
    const [isActive, setIsActive] = useState(false);

     useEffect(() => {
       window.addEventListener("resize", updateMenu);
       return () => window.removeEventListener("resize", updateMenu);
     });

    const updateMenu = () => {
        setWideWidth(window.innerWidth < 800);
    }

   

    const onClick = () => {
      setIsActive(!isActive);
    }



  return (
    <div className="menu">
      {isWideWidth ? (
        <div>
          <div onClick={onClick} className="menu__hamburger-container">
            <span className="menu__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <nav
            ref={dropdownRef}
            className={`menu ${
              isActive ? "active" : "inactive"
            }`}
          >
            <ul>
              <li>
                <Link to="/" className="menu__item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="menu__item">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:missymaloney1@gmail.com" className="menu__item">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div></div>
        
      )}

     {/*  <div className="menu__list-container">
          <div>
            <Link to="/" className="menu__item">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="menu__item">
              About
            </Link>
          </div>
          <div>
            <a href="mailto:missymaloney1@gmail.com" className="menu__item">
              Contact
            </a>
          </div>
        </div> */}

      <div className="fly-in--nav--social">
        <a href="https://www.facebook.com/" title="Facebook Link">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.twitter.com/" title="Twitter Link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default MenuNavComponent;
