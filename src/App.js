import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';

// Code gồm có: template + logic
// JSX (chính là template)
// trình biên dịch là babel
// src={logo}: là biến 

// function App() {}      <=>      function App = () => {}

// Xóa 1 vài file ko dùng: 
// + App.test.js (dùng để test code)
// + setupTests.js


function App() {  // đây là class
  let name = "Ngô Tuấn";  // string 

  const handleEventClick = (event) => {
    console.log('>>> click me', event.target.value);
  }

  return (
    <div className="App">
      <Nav/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!! Learn ReactJS with {name}</h1>
        <input type="text" value="Ngô Tuấn" onClick={(event) => {handleEventClick(event)} }/>
        <button type="button" onClick={ (event) => {handleEventClick(event)} }>Click me</button>
      </header>
    </div>
  );
}

export default App;
