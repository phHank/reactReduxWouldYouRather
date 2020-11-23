import { RECEIVE_INITIAL_DATA } from '../actions/shared'


const users = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}

export default users