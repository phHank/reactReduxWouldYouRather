export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const LOGOUT = 'LOGOUT'

const receiveAuthedUser = authedUser => ({
    type: GET_AUTHED_USER,
    authedUser,
})

export const handleUserLogin = username => dispatch => {    
    dispatch(receiveAuthedUser(username))
}

const logoutAuthedUser = () => ({
    type: LOGOUT,
    authedUser: null
})

export const clearAuthedUser = () => dispatch => {
    dispatch(logoutAuthedUser())
}