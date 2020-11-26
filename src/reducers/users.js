import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { ADD_QUESTION, ANSWER_POLL } from '../actions/questions'

const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_POLL:
            return {
                ...state, 
                ...action.userUpdate
            }
        case ADD_QUESTION:
            return {
                ...state,
                ...action.userUpdate
            }
        default:
            return state
    }
}

export default users