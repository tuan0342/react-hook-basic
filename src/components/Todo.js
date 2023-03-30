// props: properties (dùng để truyền dữ liệu qua lại giữa các component)
//        -> truyền dữ liệu từ cha xuống con (Todo là con, App là cha)

const Todo = (props) => {
    const todos = props.myData;
    return(
        <div className='todo-container'>
            <div className="title">
                {props.title}
            </div>

            {/* Dùng map để lặp vì nó tạo array mới (ko ảnh hưởng đến data), thay vì dùng for hay for-each */}
            {todos.map(todo => {
                return(
                    <li className='todo-child' key={todo.id}>{todo.title}</li> 
                );      
            })}

            <hr/>
        </div>
    )
}

export default Todo;
