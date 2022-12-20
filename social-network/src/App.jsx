import "./App.css";
import logo from "./img/header/logo.svg";
function App() {
  return (
    <div className="app-wrapper">
      <header className="App-header">
        <img src={logo} width="24" height="24" />
      </header>
      <nav>
        <ul>
          <li>Profile</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="">Main content</div>
    </div>
  );
}

export default App;
