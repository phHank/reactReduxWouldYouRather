import { fetchUsers, fetchQuestions } from '../API'

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INITIAL_DATA'

const receiveData = (users, questions, authedUser = null) => ({
    type: RECEIVE_INITIAL_DATA,
    users, 
    questions,
    authedUser: authedUser
})

export const handleInitialData = () => dispatch => {    
    Promise.all([fetchUsers(), fetchQuestions()])
        .then(apiResults => {
            const [users, questions] = apiResults
            dispatch(receiveData(users, questions))
        })
}