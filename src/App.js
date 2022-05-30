import React from 'react';
import './App.css';
import twitter from './twitter/twitterImage.png';

function App() {
  return (
    <React.Fragment>
    {/* main content */}
      <div>
        {/* image div - left content */}
        <div>
          <img src={twitter} alt="" />
        </div>
        {/* signin options div - right content */}
        <div>

        </div>
      </div>
      {/* footer links */}
    </React.Fragment>
  );
}

export default App;
