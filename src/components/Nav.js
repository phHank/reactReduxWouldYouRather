import {NavLink} from 'react-router-dom'
import Login from './Login'

const Nav = () => {
    return (
        <nav className='navbar navbar-dark d-flex justify-content-center bg-dark'>
            <NavLink className='btn btn-primary text-dark m-1' to='/'>Home</NavLink>
            <NavLink className='btn btn-primary text-dark m-1' to='/leaderboard'>Leaderboard</NavLink>
            <NavLink className='btn btn-primary text-dark m-1' to='/add'>Create Question</NavLink>
            <Login />
        </nav>
    )
}

export default Nav