import React from 'react';
import SignupPage from '../pages/signupPage';

const SignUp = () => (
    <form>
        <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
        <label htmlFor="school">School: </label>
            <input type="text" id="school" />
        <label htmlFor="region">Region: </label>
            <input type="text" id="region" />
        <label htmlFor="email">Email: </label>
            <input type="text" id="email" />
        <label htmlFor="phone">Phone: </label>
            <input type="text" id="phone" />
        <label htmlFor="password">Password: </label>
            <input type="text" id="password" />
    </form>
)

export default SignUp;