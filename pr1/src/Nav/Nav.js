import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Navigation extends Component {
    render() {
        return (
            <div>
                 <nav>
        <ul >
          <li>
            <NavLink to="/Form" >Form</NavLink>
          </li>
          <li >
            <NavLink to="/city-func" >CityFunc</NavLink>
          </li>
          <li >
            <NavLink to="/city-class" >CityClass</NavLink>
          </li>
          <li >
            <NavLink to="/book-func">BookFunc</NavLink>
          </li>
          <li >
            <NavLink to="/book-class">BookClass</NavLink>
          </li>
        </ul>
      </nav>
            </div>
        );
    }
}

export default Navigation;
