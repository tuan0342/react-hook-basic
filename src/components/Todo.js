// props: properties (dùng để truyền dữ liệu qua lại giữa các component)
//        -> truyền dữ liệu từ cha xuống con (Todo là con, App là cha)

import './Todo.scss'

const Todo = (props) => {
    const todos = props.myData; // C1 
    // const {todos, title} = props;  // C2

    const handleDelete = (id) => {
        props.deleteDataTodo(id);
    }

    return(
        <div className='todo-container'>
            <div className="title">
                {props.title}
            </div>

            {/* Dùng map để lặp vì nó tạo array mới (ko ảnh hưởng đến data), thay vì dùng for hay for-each */}
            {todos.map(todo => {
                return(
                    <div key={todo.id}> 
                        <li className='todo-child'> {todo.title} 
                            &nbsp;  &nbsp; <span onClick={() => handleDelete(todo.id)}> x</span> 
                        </li> 
                    </div>
                );      
            })}
        </div>
    )
}

export default Todo;
