import React from 'react';
import { Link, navigate } from 'gatsby';
import { getUser, isLoggedIn, logout } from '../services/auth';

export default function Nav() {
    let greetingMessage = "";
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        greetingMessage = `You are not logged in`
    }

    return (
        <div>
            <span>{greetingMessage}</span>
            <nav>
                <Link to="/aboutPage">About</Link>
                {` `}
                <Link to="/signupPage">Sign Up</Link>
                {` `}
                <Link to="/app/profile">My Page</Link>
                {` `}
                {isLoggedIn() ? (
                    <a 
                        href="/"
                        onClick={event => {
                            event.preventDefault()
                            logout(() => navigate(`/app/login`))
                        }}
                    >Logout</a>
                ) : null}
            </nav>
        </div>
    )
}