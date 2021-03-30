import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <NavLink className="navbar-brand" to="/">CRUD App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
            </ul>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        </div>
    </nav>
);
};

export default Navbar;