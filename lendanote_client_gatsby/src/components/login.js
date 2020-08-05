import React from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from '../services/auth';
import { render } from 'react-dom';

class Login extends React.Component {
    state = {
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
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/profile`)
        }

        return (
            <div>
                <h2>Log In Here</h2>
                <form 
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/app/profile`)
                    }}    
                >
                    <label>
                        Email: 
                        <input type="text" name="email" onChange={this.handleUpdate} />    
                    </label>
                    <label>
                        Password: 
                        <input type="password" name="password" onChange={this.handleUpdate} />    
                    </label>
                    <input type="submit" value="Log In" />
                </form>        
            </div>
        )
    }              
}

export default Login;