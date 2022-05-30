import React from "react";

function AppleSignIn() {
  return (
    <React.Fragment>
        <div className="flex border-gray border rounded-full w-72 justify-center items-center pt-2 pb-2 border-gray-300 hover:bg-gray-200 hover:border-gray-300 transition-all duration-300">
            <ion-icon name="logo-apple"></ion-icon>
            <h1 className="pl-1 font-semibold">Signup with Apple</h1>
        </div>
    </React.Fragment>
  )
}

export default AppleSignIn;
