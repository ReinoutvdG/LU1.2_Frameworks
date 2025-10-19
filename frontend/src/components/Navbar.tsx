// src/components/Navbar.tsx
import React from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: "modules" | "courses") => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Mijn Dashboard
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`btn nav-link ${
                  currentPage === "modules" ? "active" : ""
                }`}
                onClick={() => onNavigate("modules")}
              >
                Modules
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn nav-link ${
                  currentPage === "courses" ? "active" : ""
                }`}
                onClick={() => onNavigate("courses")}
              >
                Courses
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
