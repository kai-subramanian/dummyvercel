import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import KeyFeatures from './pages/KeyFeatures';
import LandingPage from './pages/LandingPage';
import Subscribe from './pages/Subscribe';
import WorldMap from './components/WorldMap';
import MapPage from './pages/MapPage';
import { HomePage } from "./pages/HomePage";

import ComingSoon from "./pages/ComingSoon";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}></Route>
          <Route path="/locations" exact element={<MapPage/>}></Route>
          <Route path="/login" exact element={<LoginPage/>}></Route>
          <Route path="/comingsoon" exact element={<ComingSoon/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

    </>

  )
}

export default App;