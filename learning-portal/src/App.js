import Registration from "./pages/Registration";
import Login from "./pages/Login";
import "./output.css";

import LeaderBoard from "./pages/LeaderBoard";
import CoursePlan from "./pages/CoursePlan";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuthCheck from "./hook/useAuthCheck";
import PublicRoute from "./component/PublicRoute";
import PrivateRoute from "./component/PrivateRoute";
import VideoPlayer from "./component/users/VideoPlayer";

function App() {
  const isAuthCheck = useAuthCheck();

  return !isAuthCheck ? (
    <div>......loading.......</div>
  ) : (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/leaderBoard"
            element={
              <PrivateRoute>
                <LeaderBoard />
              </PrivateRoute>
            }
          />

          <Route element={<CoursePlan />}>
            <Route
              path="/coursePlan/*"
              element={
                <PrivateRoute>
                  <VideoPlayer />
                </PrivateRoute>
              }
            />
            <Route
              path="/coursePlan/:videoId"
              element={
                <PrivateRoute>
                  <VideoPlayer />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
