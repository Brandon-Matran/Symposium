import React from "react";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid alertPlaceholder">
        <a className="navbar-brand" href="#">
          Conference GO!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="locations/new"
              >
                New Location
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="conferences/new"
              >
                New Conference
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="presentations/new"
              >
                New Presentations
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search conferences"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
