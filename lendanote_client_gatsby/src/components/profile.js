import React from 'react';
import { getUser } from "../services/auth";

const Profile = () => (
    <div>
        <h2>Your Profile</h2>
        <ul>
            <li>Name: {getUser().name}</li>
            <li>Email: {getUser().email}</li>
            <li>School: {getUser().school}</li>
            <li>Region: {getUser().region}</li>
            <li>School Phone: {getUser().school_phone}</li>
        </ul>
    </div>
)

export default Profile;