import React from "react";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <a href="/">
          <li>
            <i className="las la-home"></i>
            <div>
              <small>HOME</small>
            </div>
          </li>
        </a>
        <a href="#about">
          <li>
            <i className="las la-user"></i>
            <div>
              <small>ABOUT</small>
            </div>
          </li>
        </a>
        <a href="#skills">
          <li>
            <i className="las la-lightbulb"></i>
            <div>
              <small>SKILLS</small>
            </div>
          </li>
        </a>
        <a href="#project">
          <li>
            <i className="las la-briefcase"></i>
            <div>
              <small>PROJECTS</small>
            </div>
          </li>
        </a>
        <a href="#contact">
          <li>
            <i className="las la-address-book"></i>
            <div>
              <small>CONTACT</small>
            </div>
          </li>
        </a>
        {/* <a href="https://github.com/labrajthakurathi" target="blink">
          <li>
            <i class="lab la-github"></i>
            <div>
              <small>GITHUB</small>
            </div>
          </li>
        </a> */}
      </ul>
    </div>
  );
};

export default Header;
