import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutPage">About</Link>
            <Link to="/signupPage">Sign Up</Link>
            <Link to="/loginPage">Log In</Link>
            <Link to="/userPage">My Page</Link>
        </nav>
)

export default Nav;