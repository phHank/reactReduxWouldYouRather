import {connect} from 'react-redux'
import LeaderCard from './LeaderCard'
import NewQuestion from './NewQuestion'

const Container = ({users, authedUser, currentPage}) => {
    const sortedUsers = Object.keys(users)
        .map(username => users[username])
        .sort((a,b) => (Object.keys(b.answers).length + b.questions.length) - 
            (Object.keys(a.answers).length + a.questions.length))

    return(
        <div>
            {currentPage === 'leaderboard' 
                    ? (
                        <div className='d-flex flex-wrap justify-content-center mt-5'>
                        <div className='d-flex align-items-center bg-primary text-dark'>
                            <h4 className='pr-5 pl-5 float-left'>Leader Board:</h4>
                        </div>  
                        <table className='border border-primary'>
                            <thead>
                                <tr className='font-weight-bold text-light bg-dark'>
                                    <th className='p-2'>Position</th>
                                    <th className='p-2'>User</th>
                                    <th className='p-2'>No. of Questions</th>
                                    <th className='p-2'>No. of Answers</th>
                                    <th className='p-2'>Total Contributions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedUsers.map((user, i) => (
                                    <LeaderCard key={user.id} user={user} rank={i + 1} authedUser={authedUser} />
                                ))}
                            </tbody>
                        </table>
                        </div>
                    ) 
                    : (
                    <div className='d-flex justify-content-center border border-primary m-5 p-3'>
                        <div>
                            <h4 className='d-flex align-items-center p-5'>Add a Question:</h4>
                        </div>
                        <NewQuestion />
                    </div>
                    )}
        </div>
    )
}

const mapStateToProps = ({authedUser, users}, {currentPage}) => ({
    authedUser, 
    users,
    currentPage
})

export default connect(mapStateToProps)(Container)