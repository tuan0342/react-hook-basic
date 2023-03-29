import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import { useState } from 'react';

// Code gồm có: template + logic
// JSX (chính là template)
// trình biên dịch là babel
// src={logo}: là biến 

// function App() {}      <=>      function App = () => {}

// Xóa 1 vài file ko dùng: 
// + App.test.js (dùng để test code)
// + setupTests.js


function App() {  // đây là class

  // // mỗi lần gọi vào useState thì sẽ render lại trang
  let [name, setName] = useState('Ngô Tuấn');  
  const [address, setAddress] = useState(''); 

  const handleEventClick = (event) => {
    console.log(address);   
    setName(address);
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  // re-render
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!! Learn ReactJS with {name}</h1>
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={ (event) => {handleEventClick(event)} }>Click me</button>
      </header>
    </div>
  );
}

export default App;
