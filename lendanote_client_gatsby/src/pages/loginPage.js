import React from 'react';
import Layout from '../components/layout';
import Login from '../components/login';

const LoginPage = () => (
    <Layout>
        <h1>Log In Here</h1>
        <div className="login-form">
            <Login />
        </div>
    </Layout>
)

export default LoginPage;