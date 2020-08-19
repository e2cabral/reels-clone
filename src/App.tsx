import React from 'react';
import './App.css';

import { VideoCard } from './components/VideoCard/VideoCard';

function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* Image with instagram logo */}
        <img
          className="app__logo"
          src="https://via.placeholder.com/500"
          alt="Instagram logo"/>
        {/* Reels text */}
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {/* Container to hold videos */}
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
