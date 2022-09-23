import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import FrontPage from "./pages/frontPage/FrontPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import MapPage from "./pages/mapPage/MapPage";
import SubmitEventPage from "./pages/submitEventPage/submitEventPage";
import { useContext } from "react";
import { Context } from "./Context";

function App() {
  let { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />

        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <RegisterPage />}
        />

       
          <Route path="/login" element={ user ? <Navigate replace to = "/"/> : <LoginPage />} />
      

        <Route path="/map" element={<MapPage />} />
        <Route path="/submit" element={<SubmitEventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
