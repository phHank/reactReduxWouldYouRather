import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { ANSWER_POLL, ADD_QUESTION } from '../actions/questions' 


const questions = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_POLL:
            return {
                ...state,
                ...action.question
            }
        case ADD_QUESTION:
            return {
                ...state,
                ...action.newQuestion
            }
        default:
            return state
    }
}

export default questions