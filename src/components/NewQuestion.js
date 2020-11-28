import { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

const NewQuestion = ({users, authedUser, dispatch}) => {
    let [optionOne, setOptionOne] = useState('')
    let [optionTwo, setOptionTwo] = useState('')
    let [submitted, setSubmitted] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()
        
        dispatch(handleAddQuestion({
            authedUser,
            optionOne,
            optionTwo,
            user: users[authedUser]
        }))

        setOptionOne(() => optionOne = '')
        setOptionTwo(() => optionTwo = '')
        setSubmitted(() => submitted = true)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {submitted && (<Redirect to='/' />)}
            <h3>Would you rather...</h3>
            <br></br>
            <div>
                <input 
                    type='text'
                    placeholder='Option One'
                    onChange={event => setOptionOne(() => optionOne = event.target.value )}
                    value={optionOne} />
            </div>
            <br></br>
            <div>
                <input 
                    type='text'
                    placeholder='Option Two'
                    onChange={event => setOptionTwo(() => optionTwo = event.target.value )}
                    value={optionTwo} />
            </div>
            <br></br>
            <div>
                <button 
                className='mb-2'
                type='submit' 
                disabled={optionOne === '' || optionTwo === '' }>
                    Submit
                </button>
            </div>
        </form>
    )
}

const mapStateToProps = ({users, questions, authedUser}) => ({
    users, 
    questions, 
    authedUser
})

export default connect(mapStateToProps)(NewQuestion)