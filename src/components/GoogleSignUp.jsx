import React from "react";
//import Avatar from './Avatar';
import google from '../google/google.png';

const GoogleSignUp = () => {
    return (
        <React.Fragment>
            <div className="rounded-full flex border border-gray-300 hover:bg-blue-50 hover:border-blue-100 transition-all duration-300 w-72 mb-3 justify-center items-center">
                {/* <Avatar /> */}
                <img className="h-7 pt- pr-2" src={google} alt="google" />
                <h1 className="pt-3 text-gray-500 text-left font-semibold text-sm pb-3">Sign up with Google </h1>
            </div>
        </React.Fragment>
    )
};

export default GoogleSignUp;