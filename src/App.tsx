import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected/Protected";
import LoadingCP from "./components/LoadingCP/LoadingCP";

// Lazy-loaded components
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Home = lazy(() => import("./pages/Home/Home"));
const Reel = lazy(() => import("./pages/Reels/Reel"));
const Playlist = lazy(() => import("./pages/Playlist/Playlist"));
const Downloads = lazy(() => import("./pages/Downloads/Downloads"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const Video = lazy(() => import("./pages/Video/Video"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingCP />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/reel" element={<Reel />} />
            <Route path="/dashboard/playlist" element={<Playlist />} />
            <Route path="/dashboard/downloads" element={<Downloads />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/video/:id" element={<Video />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
