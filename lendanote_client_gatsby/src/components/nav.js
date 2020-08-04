import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
    <div>
        <span>You are not logged in</span>
        <nav>
            <Link to="/aboutPage">About</Link>
            <Link to="/signupPage">Sign Up</Link>
            <Link to="/loginPage">Log In</Link>
            <Link to="/userPage">My Page</Link>
        </nav>
    </div>
)

export default Nav;