import React, { useState, useRef, MutableRefObject } from 'react';

import { VideoHeader } from '../VideoHeader/VideoHeader';
import { VideoFooter } from '../VideoFooter/VideoFooter';

import './VideoCard.css';

interface Props {

}

export const VideoCard: React.FC<Props> = (props) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null) as MutableRefObject<HTMLVideoElement>;

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop that fuckin video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play that fuckin video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://scontent-gig2-1.cdninstagram.com/v/t50.16885-16/10000000_2543406079321045_204988013585122604_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2LmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=8u8AlbOYtBEAX9xkzI6&vs=17866821616732731_19346171&_nc_vs=HBksFQAYJEdJQ1dtQURWb19EZk5na0pBQ3hGOUNTRFE5Z0NidlZCQUFBRhUAAsgBABUAGCRHSnpoaGdWZ2ZqcVJ5RG9DQUUzOUJPN2puUllhYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAABgAFvbrubnv8bw%2FFQIoAkMzLBdAT2ZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB17AcA&oe=5F3ED094&oh=8ebf8e2380e88b8e4ab420b3d173ad58"
        // controls
        loop
      />
      <VideoFooter />
    </div>
  );
}