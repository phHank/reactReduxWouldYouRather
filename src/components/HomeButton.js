import {NavLink} from 'react-router-dom'

const HomeButton = ({children}) => <NavLink className='btn btn-primary text-dark m-1' to='/'>{children}</NavLink>

export default HomeButton