import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { ANSWER_POLL } from '../actions/questions' 


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
        default:
            return state
    }
}

export default questions