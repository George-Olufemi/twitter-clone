import React from 'react';
import './App.css';
import twitter from './twitter/twitterImage.png';
import twitterLogo from './twitterLogo/logo.png';
import GoogleSignUp from './GoogleSignUp';

function App() {
  return (
    <React.Fragment>
    {/* main content */}
      <div className='flex'>
        {/* image div - left content */}
        <div>
          <img src={twitter} alt="twitterbanner" />
        </div>
        {/* signin options div - right content */}
        <div>
        <img className='pt-9 pl-9' src={twitterLogo} alt="twitterlogo" />
        <h1 className='pl-9 pt-16 font-bold text-7xl text-gray-900'>Happening now</h1>
        <h1 className='pl-9 pt-16 font-bold text-4xl text-gray-900'>Join Twitter today.</h1>
        <GoogleSignUp />
        </div>
      </div>
      {/* footer links */}
    </React.Fragment>
  );
}

export default App;
