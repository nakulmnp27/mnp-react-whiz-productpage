import type { JSX } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navMain navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="wrapBox container-lg">

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
              <NavLink className="linkA nav-link" to="#">
                Training Library
              </NavLink>
            </li>

            <li className="itemTwo nav-item">
              <NavLink className="linkB nav-link" to="#">
                Platform
              </NavLink>
            </li>

            <li className="itemThree nav-item">
              <NavLink className="linkC nav-link" to="#">
                For Business
              </NavLink>
            </li>

            <li className="itemFour nav-item">
              <NavLink className="linkD nav-link" to="#">
                Subscriptions
              </NavLink>
            </li>

            <li className="itemFive nav-item">
              <NavLink className="linkE nav-link" to="#">
                Resources
              </NavLink>
            </li>

            <li className="itemApi">
              <NavLink className="linkApi nav-link" to="/api-course/1">
                API Course
              </NavLink>
            </li>

          </ul>

          <div className="rightBtns d-flex gap-2">

            <button
              className="btn btnA rounded-pill"
              style={{
                border: "1px solid #F7931E",
                color: "#F7931E",
                background: "white",
              }}
            >
              Sign In
            </button>

            <button
              className="btn btnB rounded-pill text-white"
              style={{
                backgroundColor: "#F7931E",
              }}
            >
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}