import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function Navbar() {
  return (
    <div>
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">
            Keeley Byerly
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
