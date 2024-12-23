import React, { useState } from 'react';
import "./Navbar.css"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header>
  <nav>
    <div className="top-nav">
      <div className="top-nav-left">
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Privacy Us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
      </div>
      <div className="top-nav-right">
        <ul>
          <li>
            <a href="">WatchList</a>
          </li>
          <li>
            <a href="">Track Order</a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="middle-nav">
      <div className="logo">
        <span className="menuBtn" onclick="openMenu()">
          ☰
        </span>
        <h1>
          Online <span>Shop</span>
        </h1>
      </div>
      <div className="mid-nav-center">
        <ul id="side-menu">
          <span className="menuBtn" onclick="closeMenu()">
            ☒
          </span>
        </ul>
      </div>
      <div className="mid-nav-center">
        <ul id="side-menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Baby Collections</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mid-nav-right">
        <ul>
          <li>
            <a href="">
              <i className="fa-solid fa-magnifying-glass" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-regular fa-user" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-cart-shopping" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="bottom-nav">
      <p>
        Sale Up to 50% Biggest Discounts. Hurry! Limited Period Offer.{" "}
        <a href="">Shop Now</a>
      </p>
    </div>
  </nav>
</header>

  );
}

export default Navbar;
