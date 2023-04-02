import './Navigation.scss';
//import '../components/Navigation.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='topnav'>
            {/* <NavLink className='active' to="/">Home</NavLink> */}
            <NavLink className={ ({ isActive }) => isActive ? "active" : "" } to="/" >Home</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todo App</NavLink>
            <NavLink to="/secret">Secret</NavLink>
        </div>
    );
}

export default Nav;