import React, { useState, useEffect } from 'react';

import { VideoCard } from './components/VideoCard/VideoCard';
import  db from './firebase';

import './App.css';

function App() {

  const [reels, setReels] = useState<Array<any>>([]);
  useEffect(() => {
    db.collection('reels').onSnapshot((snapshot) => {
      setReels(snapshot.docs.map(doc => doc.data()));
    });
  }, [])

  return (
    <div className="app">
      <div className="app__top">
      </div>
      <div className="app__videos">
        { reels.map((reel) => (
          <VideoCard
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            song={reel.song}
            url={reel.url}
            likes={reel.likes}
            share={reel.share}
          />
        )) }
      </div>
    </div>
  );
}

export default App;
