import {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handlePollVote} from '../actions/questions'
import HomeButton from './HomeButton'

const Poll = ({users, authedUser, questions, dispatch, match}) => {
    let [vote, setVote] = useState('')
    let [voted, setVoted] = useState(false)
        
    const question = questions[match.params.qid]
    if (question === undefined) {
        return (
            <Redirect to='/404' />
        )
    }

    const option1Votes = question.optionOne.votes.length
    const option2Votes = question.optionTwo.votes.length
    const totalVotes = option1Votes + option2Votes

    const handleVote = event => {
        event.preventDefault()
        
        dispatch(handlePollVote({
            authedUser,
            questions, 
            qid: match.params.qid,
            answer: vote,
            user: users[authedUser]
        }))
        
        setVoted(() => voted = true)
    }
        
    return(
        <div>
            <div className='d-flex justify-content-center border border-primary m-5 p-3'>
                <img
                    className='rounded-circle mr-2 border border-dark' 
                    src={users[question.author].avatarURL} 
                    alt={`${question.author} avatar`} 
                    />
                {[...question.optionOne.votes, ...question.optionTwo.votes].includes(authedUser)
                    ? (
                    <div>
                        <p>You would rather...</p>
                            {question.optionOne.votes.includes(authedUser)
                                ? (<p>
                                    <strong>{question.optionOne.text}</strong>
                                    {` (Received: ${option1Votes} out of ${totalVotes} total votes or 
                                    ${Math.round(option1Votes/totalVotes * 100)}% of all votes)`}
                                    </p>)
                                : (<p>
                                <strong>{question.optionTwo.text}</strong>
                                {` (Received: ${option2Votes} out of ${totalVotes} total votes or 
                                ${Math.round(option2Votes/totalVotes * 100)}% of all votes)`}
                                </p>)}
                        <p className='text-muted'>than</p>
                        <p>{
                            !question.optionOne.votes.includes(authedUser) 
                                ? `${question.optionOne.text} 
                                    (Received: ${option1Votes} out of ${totalVotes} total votes or
                                    ${Math.round(option1Votes/totalVotes * 100)}% of all votes)`
                                : `${question.optionTwo.text} 
                                    (Received: ${option2Votes} out of ${totalVotes} total votes or
                                    ${Math.round(option2Votes/totalVotes * 100)}% of all votes)`
                            }
                        </p>
                        <HomeButton>Home</HomeButton>
                    </div>
                    )
                    : (
                    <div>
                        <h4>Would you rather...</h4>
                        <form 
                          onChange={event => setVote(() => vote = event.target.value)} 
                          onSubmit={handleVote} >
                            <label>
                                <input 
                                type='radio' 
                                value='optionOne' 
                                name='poll' />
                                    &nbsp;{question.optionOne.text}
                            </label>

                            <p className='text-muted'>or</p>
                            
                            <label>
                                <input 
                                type='radio' 
                                value='optionTwo' 
                                name='poll' />
                                    &nbsp;{question.optionTwo.text}
                            </label>
                            
                            <br></br>
                            <button 
                                type='submit' 
                                className='btn btn-primary text-dark ml-5' 
                                disabled={voted || !vote}>Vote
                            </button>
                        </form>
                    </div>
                    )}
            </div>
        </div>
    )
}

const mapStateToProps = ({users, questions, authedUser}) => ({
    users, 
    questions, 
    authedUser
})

export default connect(mapStateToProps)(Poll)