import "./App.css";
import { PullScreen } from "./components/PullScreen/PullScreen";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ROUTES } from "./constants";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
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
