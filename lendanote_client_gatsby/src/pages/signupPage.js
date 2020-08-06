import React from 'react';
import Layout from '../components/layout';
import SignUp from '../components/signUp';

const SignupPage = () => (
    <Layout>
        <h1>Sign Up To Lend and Borrow Music!</h1>
        <div className="signup-form">
            <SignUp />
        </div>
    </Layout>
)

export default SignupPage;