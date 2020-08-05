import React from 'react';
import SignupPage from '../pages/signupPage';

const SignUp = () => (
    <form>
        <label htmlFor="name">
            Name: 
            <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="school">
            School: 
            <input type="text" id="school" name="school" />
        </label>
        <label htmlFor="region">
            Region: 
            <input type="text" id="region" name="region" />
        </label>
        <label htmlFor="email">
            Email: 
            <input type="text" id="email" name="email" />
        </label>
        <label htmlFor="phone">
            Phone: 
            <input type="text" id="phone" name="phone" />
        </label>
        <label htmlFor="password">
            Password: 
            <input type="text" id="password" name="password" />
        </label>
    </form>
)

export default SignUp;