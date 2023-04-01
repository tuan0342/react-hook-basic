import './Navigation.scss';
//import '../components/Navigation.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='topnav'>
            <Link className='active' to="/">Home</Link>
            <Link to="/timer">Timer App</Link>
            <Link to="/todo">Todo App</Link>
            <Link to="/secret">Secret</Link>
        </div>
    );
}

export default Nav;