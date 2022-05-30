import React from 'react';
import './App.css';
import twitter from './twitter/twitterImage.png';
import twitterLogo from './twitterLogo/logo.png';
import GoogleSignUp from './components/GoogleSignUp';
import AppleSignIn from './components/AppleSignIn';
import SignInWithButton from './components/SignInWithButton';
import SignInButton from './components/SignInButton';

function App() {
  return (
    <React.Fragment>
    {/* main content */}
      <div className=' md:flex'>
        {/* image div - left content */}
        <div className="hidden md:block">
          <img src={twitter} alt="twitterbanner" />
        </div>
        {/* signin options div - right content */}
        <div>
        <img className='pt-9 pl-9' src={twitterLogo} alt="twitterlogo" />
        <h1 className='pl-9 pt-12 md:pt-16 font-bold text-5xl md:text-7xl text-gray-900'>Happening now</h1>
        <h1 className='pl-9 pt-10 md:pt-16 font-bold text-2xl md:text-4xl text-gray-900 pb-8'>Join Twitter today.</h1>
          <div className='pl-9'>
            <GoogleSignUp />
            <AppleSignIn />
          </div>
          <h1 className='pl-48 md:pl-44 pt-3 text-sm pb-3'>or</h1>
          <div className='pl-9'>
            <SignInWithButton />
          </div>
          <h1 className='pl-9 text-xs pt-1'>By signing up, you agree to the <span className='text-blue-500 hover:underline'>Terms of<br /> Service</span> and <span className='text-blue-500 hover:underline'>Privacy Policy</span>, including <span className='text-blue-500 hover:underline'>Cookie Use.</span></h1>
          <h1 className="pl-9 pt-10 pb-5 font-bold">Already have an account?</h1>
          <SignInButton />
        </div>
      </div>
      <div className="md:hidden pt-10">
          <img src={twitter} alt="twitterbanner" />
        </div>
      {/* footer links */}
    </React.Fragment>
  );
}

export default App;
