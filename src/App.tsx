import "./App.css";
import { PullScreen } from "./components/PullScreen/PullScreen";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ROUTES } from "./constants";
import { Helmet } from "react-helmet";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Helmet>
        <link
          rel="preload"
          href={`/images/${process.env.REACT_APP_VIDEO_STILL_IMAGE_NAME}`}
          as="image"
        ></link>
        <link
          rel="preload"
          href={`/videos/${process.env.REACT_APP_VIDEO_NAME}`}
          as="video"
          type="video/mp4"
        ></link>
      </Helmet>
      <Routes>
        <Route
          path={ROUTES.PULLSCREEN_URL}
          element={<PullScreen onClick={() => navigate(ROUTES.VIDEO_URL)} />}
        />
        <Route
          path={ROUTES.VIDEO_URL}
          element={
            <VideoPlayer
              onVideoStopped={() => navigate(ROUTES.PULLSCREEN_URL)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
