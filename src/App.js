import logo from './logo.svg';
import './App.css';

// Code gồm có: template + logic
// JSX (chính là template)
// trình biên dịch là babel
// src={logo}: là biến 

// function App() {}      <=>      function App = () => {}

// Xóa 1 vài file ko dùng: 
// + App.test.js (dùng để test code)
// + setupTests.js


function App() {
  let name = "Ngô Tuấn";  // string 
  let number = 2022;
  let link = "https://www.youtube.com/watch?v=0HzKV6QH5Ik";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!! Learn ReactJS with {name} in {number}</h1>
        <a href={link} target="_blank" rel="noreferrer">Visit piano</a>
      </header>
    </div>
  );
}

export default App;
