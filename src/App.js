import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import { useState } from 'react';
import Todo from './components/Todo';

// Code gồm có: template + logic
// JSX (chính là template)
// trình biên dịch là babel
// src={logo}: là biến 

// hook not merge state (tức là nó ko hợp nhất state mới và cũ), but class auto merge
// Để merge dùng: '...' spread syntax array (copy dữ liệu cũ)

// function App() {}      <=>      function App = () => {}

// Xóa 1 vài file ko dùng: 
// + App.test.js (dùng để test code)
// + setupTests.js


function App() {  // đây là class

  // // mỗi lần gọi vào useState thì sẽ render lại trang
  let [name] = useState('Ngô Tuấn');  // state: "Ngô Tuấn"
  const [nameFromInput, setnameFromInput] = useState('');  // state: ""
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Học React cơ bản', type: 'momonga'},
    {id: 'todo2', title: 'Làm bài tập về nhà', type: 'momonga'},
    {id: 'todo3', title: 'Chơi game', type: 'momon'},
    {id: 'todo4', title: 'Đọc sách', type: 'momon'}
  ]);

  const handleEventClick = (event) => {
    if (!nameFromInput) return alert('Empty input');  // check biến rỗng
    // hook not merge state (tức là nó ko hợp nhất state mới và cũ), but class auto merge
    // ... spread syntax array
    let newTodo = {id: 'abc', title: nameFromInput, type: 'momonga'};
    setTodos([...todos, newTodo]);
  }

  const handleOnChangeInput = (event) => {
    setnameFromInput(event.target.value);
  }

  // re-render
  return (
    <div className="App">
      <header className="App-header">

        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!! Learn ReactJS with {name}</h1>
        <Todo
          myData={todos}
          title={'Danh sách todo'}
        />

        <Todo
          myData={todos.filter(item => item.type === 'momonga')}
          title={'Todo của Momonga'}
        />
        <input type="text" value={nameFromInput} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={ (event) => {handleEventClick(event)} }>Click me</button>

      </header>
    </div>
  );
}

export default App;
