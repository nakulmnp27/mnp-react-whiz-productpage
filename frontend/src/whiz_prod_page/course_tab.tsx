import type { JSX } from "react";
import "./course_tab.css";

export default function CourseTabs(): JSX.Element {
  return (
    <div className="container-lg mt-4 px-0">
      <ul className="nav nav-tabs justify-content-between flex-nowrap overflow-auto">
        <li className="course_overview_li nav-item ">
          <a href="#overview" className=" nav-link border-0 text-white "> COURSE OVERVIEW </a>
        </li>
        <li className="nav-item">
          <a href="#included" className="nav-link text-dark border-0 "> INCLUDED IN THIS COURSE </a>
        </li>
        <li className="nav-item">
          <a href="#exam" className="nav-link text-dark border-0"> EXAM FORMAT </a>
        </li>
        <li className="nav-item">
          <a href="#benefits" className="nav-link text-dark border-0"> BENEFITS & TESTIMONIALS </a>
        </li>
        

        <li className="nav-item">
          <a href="#faq" className="nav-link text-dark border-0 "> FAQ'S </a>
        </li>
      </ul>
    </div>
  );
}