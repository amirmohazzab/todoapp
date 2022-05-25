import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <div className="m-3">
        <ul className="nav nav-pills justify-content-center">
            <li >
            <NavLink 
                className={({ isActive }) => isActive ? "green" : "blue"}
                to=""
                // className='nav-link'
                // exact
                // activeClassName="active"
            >
              Routine tasks     
          </NavLink>
            </li>
            <li >
            <NavLink 
                className={({ isActive }) => isActive ? "green" : "blue"}
                to="about"
                // className='nav-link'
            >
              About creator
          </NavLink>
            </li>
        </ul>
    </div>
    );
};

export default Nav;

