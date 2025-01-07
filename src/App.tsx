import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./Components/Protected/Protected";
import LoadingCP from "./Components/LoadingCP/LoadingCP";

// Lazy-loaded components
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const DashBoard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Reel = lazy(() => import("./Pages/Reels/Reel"));
const Playlist = lazy(() => import("./Pages/Playlist/Playlist"));
const Downloads = lazy(() => import("./Pages/Downloads/Downloads"));
const Library = lazy(() => import("./Pages/Library/Library"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Settings = lazy(() => import("./Pages/Settings/Settings"));
const Video = lazy(() => import("./Pages/Video/Video"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingCP />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/reel" element={<Reel />} />
            <Route path="/dashboard/playlist" element={<Playlist />} />
            <Route path="/dashboard/downloads" element={<Downloads />} />
            <Route path="/dashboard/library" element={<Library />} />
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
