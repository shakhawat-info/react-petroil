import React from "react";

const Nav = () => {
  return (
    <nav>
      <div class="container">
        <div class="main_nav">
          <div class="nav_logo">
            <img src="photos/Logo.png" alt="logo" />
          </div>
          <div class="nav_list">
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
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
            <a href="#" class="nav_btn">
              contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
