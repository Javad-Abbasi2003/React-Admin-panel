import { useState } from "react"
import { Route, Routes } from "react-router-dom";

import './App.css';

//Components
import Navbar from './components/Navbar';
import HamMenu from './components/styledHamMenu';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';
import Orders from "./components/Orders";
import Comments from "./components/Comments";

function App() {
  const [showPanel, setShowPanel] = useState(false);

  const clickHandler = () => {
    setShowPanel(!showPanel);
  }
  const ofPanelClickHandler = () => {
    setShowPanel(false);
  }

  return (
    <div className="App">
      <HamMenu close={!showPanel} onClick={clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </HamMenu>
      <Panel showPanel={showPanel} setShowPanel={setShowPanel} />
      <div onClick={ofPanelClickHandler}>
        <Navbar/>
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/comments" element={<Comments /> } />
            <Route path="/charts" element={<h1>Charts</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
