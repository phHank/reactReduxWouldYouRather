import { fetchUsers, fetchQuestions } from '../API'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions' 

export const handleInitialData = () => dispatch => {    
    fetchUsers().then(users => {
        dispatch(receiveUsers(users))
    })

    fetchQuestions().then(questions => {
        dispatch(receiveQuestions(questions))
    })
}