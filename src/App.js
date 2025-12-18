import logo from "./logo.svg";
import "./App.css";
import Home from "./components_task1/Home.jsx";
// import State from "./components_task1/state.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Home/> */}
      {/* <State/> */}
      
    </div>
  );
}

export default App;
