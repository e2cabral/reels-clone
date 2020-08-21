import React, { useState, useRef, MutableRefObject } from 'react';

import { VideoHeader } from '../VideoHeader/VideoHeader';
import { VideoFooter } from '../VideoFooter/VideoFooter';

import './VideoCard.css';

interface Props {
  channel: string;
  avatarSrc: string;
  song: string;
  url: string;
  likes: number;
  share: number;
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
        src={props.url}
        // controls
        loop
      />
      <VideoFooter
        channel={props.channel}
        avatarSrc={props.avatarSrc}
        song={props.song}
        likes={props.likes}
        share={props.share}
      />
    </div>
  );
}