export const GET_AUTHED_USER = 'GET_AUTHED_USER'

export const receiveAuthedUser = authedUser => ({
    type: GET_AUTHED_USER,
    authedUser,
})

export const handleUserLogin = username => dispatch => {    
    dispatch(receiveAuthedUser(username))
}