import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import { useState } from 'react';

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
  let [name, setName] = useState('Ngô Tuấn');  // state: "Ngô Tuấn"
  const [nameFromInput, setnameFromInput] = useState('');  // state: ""
  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Học React cơ bản'},
    {id: 'todo2', title: 'Làm bài tập về nhà'},
    {id: 'todo3', title: 'Chơi game'}
  ]);

  const handleEventClick = (event) => {
    if (!nameFromInput) return alert('Empty input');  // check biến rỗng

    // hook not merge state (tức là nó ko hợp nhất state mới và cũ), but class auto merge
    // ... spread syntax array
    let newTodo = {id: 'abc', title: nameFromInput};
    setTodos([...todos, newTodo]);
  }

  const handleOnChangeInput = (event) => {
    setnameFromInput(event.target.value);
  }

  // re-render
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!! Learn ReactJS with {name}</h1>

        <div className='todo-container'>
          {/* Dùng map để lặp vì nó tạo array mới (ko ảnh hưởng đến data), thay vì dùng for hay for-each */}
          {todos.map(todo => {
            return(
              <li className='todo-child' key={todo.id}>{todo.title}</li> 
            );
          })}

        </div>
        <input type="text" value={nameFromInput} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={ (event) => {handleEventClick(event)} }>Click me</button>
      </header>
    </div>
  );
}

export default App;
