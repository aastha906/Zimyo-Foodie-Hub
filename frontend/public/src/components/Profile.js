import React from 'react';

function Profile({ user }) {
    return (
        <div>
            <h1>{user.username}</h1>
            <p>Email: {user.email}</p>
            <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
    );
}

export default Profile;
