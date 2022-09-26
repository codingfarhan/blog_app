import logo from "../logo.svg";
import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import About from "./AboutPage/About";
import RegistrationForm from "./UserRegistration/RegistrationForm";
import { PickUsername } from "./UserRegistration/PickUsername";
import LoginPage from "./UserLogin/LoginPage";
import ExploreBlogsPage from "./ExploreBlogs/ExploreBlogsPage";

// The 'App' functional component:
function App() {
  console.log("Home page being rendered...");
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/signup"} element={<RegistrationForm />} />
        <Route path={"/signup/pickUsername"} element={<PickUsername />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/blogs"} element={<ExploreBlogsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
