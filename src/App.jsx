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
import AccountPage from "./pages/AccountPage";
import FleetOverview from "./pages/FleetOverview";
import TaskView from "./pages/TaskView";
import ReportView from "./pages/ReportView";
import ControlInterface from "./pages/ControlInterface";
import Machines from "./pages/Machines";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>}></Route>
          <Route path="/locations" exact element={<MapPage/>}></Route>
          <Route path="/login" exact element={<LoginPage/>}></Route>
          <Route path="/comingsoon" exact element={<ComingSoon/>}></Route>
          <Route path="/account" exact element={<AccountPage/>}></Route>
          <Route path="/fleetoverview" exact element={<FleetOverview/>}></Route>
          <Route path="/taskview" exact element={<TaskView/>}></Route>
          <Route path="/reportview" exact element={<ReportView/>}></Route>
          <Route path="/control" exact element={<ControlInterface/>}></Route>
          <Route path="/machines" exact element={<Machines/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

    </>

  )
}

export default App;