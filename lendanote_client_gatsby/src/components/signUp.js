import React from 'react';
import { navigate } from 'gatsby';
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

    // handleSubmit = event => {
    //     event.preventDefault()
    //     handleSignUp(this.state)
    // }

    render() {
        // if (isLoggedIn()) {
        //     navigate(`/app/profile`)
        // }

        return (
            <div>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/profile`)
                    }} 
                >
                    <label>
                        Name: 
                        <input type="text" name="name" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <label>
                        School: 
                        <input type="text" name="school" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <label>
                        Region: 
                        <input type="text" name="region" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <label>
                        Phone: 
                        <input type="text" name="phone" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <label>
                        Email: 
                        <input type="text" name="email" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <label>
                        Password: 
                        <input type="text" name="password" onChange={this.handleUpdate} />
                    </label>
                    {` `}
                    <input type="submit" value="Create Account" />
                </form>
            </div>
        )
    }              
}

export default SignUp;