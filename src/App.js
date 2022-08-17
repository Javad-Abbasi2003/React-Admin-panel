import { useState } from "react"
import styled from "styled-components";
import './App.css';

import Navbar from './components/Navbar';
import Panel from './components/Panel';

const Div = styled.div`
  position: fixed;
  top: 25px;
  right: 20px;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 6px;
  padding-left: ${(props) => (props.close ? "6px" : "0px")};
  margin-left: ${(props) => (props.close ? "0px" : "6px")};
  border-radius: 5px;
  z-index: 15;
  cursor: pointer;
  transition: all 0.15s ease-out;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &:hover {
    background-color: #d4d4d4;
  }
  div {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    background-color: ${(props) => (props.close ? "#000" : "#f5f5f5")};
    transform-origin: 1.5rem;
    transition: all 0.3s ease-out;
    &:nth-child(1) {
      transform: ${(props) => (props.close ? "rotate(0)" : "rotate(-43deg)")};
    }
    &:nth-child(2) {
      transition: all 0.2s ease-out;
      transform: ${(props) =>
        props.close ? "translateX(0)" : "translateX(100%)"};
      opacity: ${(props) => (props.close ? 1 : 0)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.close ? "rotate(0)" : "rotate(43deg)")};
    }
  }
`;

function App() {
  const [showPanel, setShowPanel] = useState(false);

  const clickHandler = () => {
    setShowPanel(!showPanel);
  }

  return (
    <div className="App">
      <Div close={!showPanel} onClick={clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </Div>
      <Panel showPanel={showPanel} />
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
