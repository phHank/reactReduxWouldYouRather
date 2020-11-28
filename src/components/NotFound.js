import HomeButton from './HomeButton'

const NotFound = () => {
    return(
        <div className='bg-dark text-light'>
            <h4 className='p-5'>404: Resource not found</h4>
            <HomeButton />
        </div>
    )
}

export default NotFound