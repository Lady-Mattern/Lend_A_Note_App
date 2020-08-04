import React from 'react';
import LoginPage from '../pages/loginPage'

const Login = () => (
    <form>
        <label htmlFor="email">Email: </label>
            <input type="text" id="email" />
        <label htmlFor="password">Password: </label>
            <input type="text" id="password" />
    </form>
)

export default Login;