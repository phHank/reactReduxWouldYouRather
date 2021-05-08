import {NavLink} from 'react-router-dom'
import Login from './Login'
import HomeButton from './HomeButton'

const Nav = () => {
    return (
        <nav className='navbar navbar-dark d-flex justify-content-center bg-dark'>
            <HomeButton>Home</HomeButton>
            <NavLink className='btn btn-primary text-dark m-1' to='/leaderboard'>Leaderboard</NavLink>
            <NavLink className='btn btn-primary text-dark m-1' to='/add'>Create Question</NavLink>
            <Login />
        </nav>
    )
}

export default Nav