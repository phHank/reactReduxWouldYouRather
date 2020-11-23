import { GET_QUESTIONS } from '../actions/questions'
import { RECEIVE_INITIAL_DATA } from '../actions/shared'


const questions = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}

export default questions