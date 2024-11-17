import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div className="footbox">
          <div class="foot_logo">
            <img src="photos/Logofoot.png" alt="logo" className="footlogo" />
            <div class="foot_contact">
              <ul>
                <li>
                  <a href="mailto: mail@yourcompany.com">
                    <img src="svg/footmail.svg" alt="footmail" />
                    <span> mail@yourcompany.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel: +896 120 5889">
                    <img src="svg/footcall.svg" alt="footcall" />
                    <span> +896 120 5889 (Toll free)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="svg/footlocation.svg" alt="footlocation" />
                    <span>101 Baker Street, New York, USA, 12345</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="foot_icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="svg/facebook.svg" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="svg/twitter.svg" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="svg/linkedin.svg" alt="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="svg/insta.svg" alt="insta" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="foot_head">
            <h2>company</h2>
            <div class="foot_list">
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">gallery</a>
              </li>
            </ul>
          </div>
          </div>
          <div class="foot_head">
            <h2>Others</h2>
            <div class="foot_list">
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          </div>
          <div class="foot_head">
            <h2>Certificate</h2>
            <div class="foot_certificates">
            <div class="crt1">
              <h3>
                <span>iso 88</span>
              </h3>
              <p>Environmentally Safe</p>
            </div>
            <div class="crt2">
              <h3>
                <span>Liquid</span>
                <span class="cetg">Green</span>
              </h3>
            </div>
          </div>
          </div>

        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="cprt_txt">
            <p>
              <i class="fa-regular fa-copyright"></i> Copyright 2022 by{" "}
              <a href="#">AltDesain Studio</a> – All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
