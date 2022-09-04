import styles from "./VideoPlayer.module.css";
import React, { useEffect } from "react";

export interface VideoPlayerProps {
  onVideoStopped: React.ReactEventHandler<HTMLVideoElement>;
}
export const VideoPlayer = ({ onVideoStopped }: VideoPlayerProps) => {
  useEffect(() => {
    console.log("loading video", process.env.REACT_APP_VIDEO_NAME);
  }, []);
  return (
    <div className={styles.videoContainer}>
      <img
        className={styles.videoImage}
        src={`/images/${process.env.REACT_APP_VIDEO_STILL_IMAGE_NAME}`}
        alt="placeholder"
      ></img>
      <video
        onEnded={onVideoStopped}
        className={styles.videoPlayer}
        src={`/videos/${process.env.REACT_APP_VIDEO_NAME}`}
        autoPlay
      ></video>
    </div>
  );
};
