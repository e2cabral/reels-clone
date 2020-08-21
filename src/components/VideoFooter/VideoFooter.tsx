import React from 'react';

import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from 'react-ticker';

import './VideoFooter.css';

interface Props {
  channel: string;
  avatarSrc: string;
  song: string;
  likes: number;
  share: number;
}

export const VideoFooter: React.FC<Props> = (props) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={props.avatarSrc} />
        <h4>{ props.channel } - <Button size="small">Follow</Button></h4>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {
            ({ index }) => (
              <>
                <h6>{ props.song }</h6>
              </>
            )
          }
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="small" />
          <ModeCommentIcon fontSize="small" />
          <SendIcon fontSize="small" />
          <MoreHorizIcon fontSize="small" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize="small" />
            <p>{ props.likes }</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon fontSize="small" />
            <p>{ props.share }</p>
          </div>
        </div>
      </div>
    </div>
  );
}