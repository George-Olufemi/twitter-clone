import React from "react";
import Avatar from './Avatar'

const GoogleSignUp = () => {
    const name = "George"
    return (
        <React.Fragment>
            <div className="rounded-full border-2 border-blue-500 flex w-50">
                <Avatar />
                <h1 className="pt-2">Sign in as {name} </h1>
            </div>
        </React.Fragment>
    )
};

export default GoogleSignUp;