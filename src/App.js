import { useState } from "react"
import { Route, Routes } from "react-router-dom";

import './App.css';

//Components
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';
import HamMenu from './components/styledHamMenu';

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
            <Route path="/orders" element={<h1>Orders</h1>} />
            <Route path="/comments" element={<h1>Comments</h1>} />
            <Route path="/charts" element={<h1>Charts</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
