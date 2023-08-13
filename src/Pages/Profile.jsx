import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    let history = useNavigate();

    return (
        <>
            <div>
                Hello from profile page
            </div>
        </>

    )
}

export default Profile;