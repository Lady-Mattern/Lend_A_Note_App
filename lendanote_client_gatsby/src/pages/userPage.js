import React from 'react';
import Layout from '../components/layout';
import Profile from '../components/profile';

const UserPage = () => (
    <Layout>
        <h1>Welcome Back </h1>
        <div className="user-container">
            <Profile />
        </div>
    </Layout>
)

export default UserPage;