import React from 'react';
import { getUser } from "../services/auth";

const Profile = () => (
    <div>
        <h2>Your Profile</h2>
        <ul>
            <li>Name: {getUser().name}</li>
            <li>Email: {getUser().email}</li>
        </ul>
    </div>
)

export default Profile;