import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.tsx'
// import urlSlug from 'url-slug'
// console.log('slug', urlSlug('Sir James Paul McCartney MBE is an English singer-songwriter'));

function App() {
  console.log("APP RENDER")
  return (
    <div className="App">
      <Greeting></Greeting>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit333333 <code>src/App.tsx</code> and save to reload!!!!.
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
    </div>
  );
}

export default App;
