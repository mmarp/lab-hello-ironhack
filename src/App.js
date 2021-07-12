import logo from './logo.svg';

import './App.css';
import Navbar from './Navbar';
import Declarative from './Declarative';
import Components from './Components';
import Single from './Single-way';
import JSX from './JSX';

function App() {
  return (
    <div class="App">
      <div id="dark-background">
        <Navbar />
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button id="btn">Awesome!</button>
      </div>
      <div id="white-background">
        <Declarative />
        <Components />
        <Single />
        <JSX />

      </div>
    </div>

  );
}

export default App;
