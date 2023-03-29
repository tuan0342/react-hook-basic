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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!!</h1>
      </header>
    </div>
  );
}

export default App;
