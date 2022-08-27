import { useEffect } from "react";
import styles from "./PullScreen.module.css";

export interface PullScreenProps {
  onClick: React.MouseEventHandler<HTMLVideoElement>;
}
export const PullScreen = ({ onClick }: PullScreenProps) => {
  useEffect(() => {
    console.log("loading video", process.env.REACT_APP_PULLSCREEN_NAME);
  }, []);
  return (
    <video
      onClick={onClick}
      className={styles.pullScreen}
      src={`/videos/${process.env.REACT_APP_PULLSCREEN_NAME}`}
      autoPlay
      loop
      muted
    ></video>
  );
};
