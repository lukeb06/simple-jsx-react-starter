import React, { useState, useEffect } from 'react'

const Profile = ({ email }) => {
    return (
        <div id="profile">
            {email}
        </div>
    )
}

export default Profile