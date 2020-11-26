import {Link} from 'react-router-dom'

const NotFound = () => {
    return(
        <div className='bg-dark text-light'>
            <h4 className='p-5'>404: Page/Item not found.</h4>
            <Link to='/'><h6 className='text-muted m-4 btn text-warning'>Homepage</h6></Link>
        </div>
    )
}

export default NotFound