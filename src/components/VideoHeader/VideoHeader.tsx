import React from 'react';

import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlined from '@material-ui/icons/CameraAltOutlined';

import './VideoHeader.css';

export const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <ArrowBackIos fontSize="small" />
      <h3>Reels</h3>
      <CameraAltOutlined fontSize="small" />
    </div>
  );
}