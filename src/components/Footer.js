import React from "react";

const Footer = () => {
  return (
    <div className="section footer " id="footer">
      <div className="content-footer">
        <footer>
          <h2 className="text-center my-4">Find on me </h2>
          <div className="footer-icons my-3">
            <ul>
              <a href="https://github.com/labrajthakurathi" target="blink">
                <li>
                  <i class="lab la-github"></i>
                  <div>
                    <small>GITHUB</small>
                  </div>
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/lab-raj-thakurathi-845679167/"
                target="blink"
              >
                <li>
                  <i class="lab la-linkedin"></i>
                  <div>
                    <small>LinkedIn</small>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className="line"></div>

          <p className="text-center">
            © 2020 All Rights Reserved @ Lab Raj Thakurathi
          </p>
          <p className="text-center">
            Designed and Developed by Lab Raj Thakurathi
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
