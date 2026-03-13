import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

export default function Navbar(): JSX.Element {
  return (
    <>
    <div className="top-adv" id="top">
      <span className="line-adv">Dont miss this holiday rush for cloud skills, upskill now</span>
      <span className="subscrib-adv">SUBSCRIBE AT 60% OFF</span>
    </div>
    <nav className="navMain navbar navbar-expand-lg  bg-white  shadow-sm py-3">
      <div className="wrapBox container-fluid px-4">

        <NavLink className="logoThing navbar-brand" to="/">
          <img src="/logo1.png" alt="logo" height="28" />
        </NavLink>

        <button
          className="btnToggle navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bigWrap" id="mainNavbar">

          <ul className="centerList navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="itemOne nav-item">
              <NavLink className="linkA nav-link text-dark" to="#">
                Training Library
              </NavLink>
            </li>

            <li className="itemTwo nav-item">
              <NavLink className="linkB nav-link text-dark" to="#">
                Platform
              </NavLink>
            </li>

            <li className="itemThree nav-item">
              <NavLink className="linkC nav-link text-dark" to="#">
                For Business
              </NavLink>
            </li>

            <li className="itemFour nav-item">
              <NavLink className="linkD nav-link text-dark" to="#">
                Subscriptions
              </NavLink>
            </li>

            <li className="itemFive nav-item">
              <NavLink className="linkE nav-link text-dark" to="#">
                Resources
              </NavLink>
            </li>

            <li className="itemApi nav-item">
              <NavLink className="linkApi nav-link text-dark" to="/api-course/1">
                API Course
              </NavLink>
            </li>

          </ul>

          <div className="rightBtns d-flex gap-2">

            <button className="btn btn-link p-1">
              <img
                src="/search.png"
                alt="Search"
                style={{ width: "18px" }}
              />
            </button>

            <button className="btn btn-link p-1">
              <img
                src="/cart.png"
                alt="Cart"
                style={{ width: "18px" }}
              />
            </button>

            <button
              className="btn btnA btn-outline-warning rounded-pill px-4"
            >
              Sign In
            </button>

            <button
              className="btn btnB btn-warning text-white rounded-pill px-4"
            >
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
    </>
  );
}