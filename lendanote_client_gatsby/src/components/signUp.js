import React from 'react';
import SignupPage from '../pages/signupPage';
import { render } from 'react-dom';

class SignUp extends React.Component {
    state = {
        name: ``,
        school: ``,
        region: ``,
        phone: ``,
        email: ``,   
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleSignUp(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/profile`)
        }

        return (
            <div>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/profile`)
                    }} 
                >
                    <label htmlFor="name">
                        Name: 
                        <input type="text" id="name" name="name" />
                    </label>
                    {` `}
                    <label htmlFor="school">
                        School: 
                        <input type="text" id="school" name="school" />
                    </label>
                    {` `}
                    <label htmlFor="region">
                        Region: 
                        <input type="text" id="region" name="region" />
                    </label>
                    {` `}
                    <label htmlFor="phone">
                        Phone: 
                        <input type="text" id="phone" name="phone" />
                    </label>
                    {` `}
                    <label htmlFor="email">
                        Email: 
                        <input type="text" id="email" name="email" />
                    </label>
                    {` `}
                    <label htmlFor="password">
                        Password: 
                        <input type="text" id="password" name="password" />
                    </label>
                    {` `}
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }              
}

export default SignUp;