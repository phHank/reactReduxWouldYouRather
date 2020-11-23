export const GET_USERS = 'GET_USERS'

export const receiveUsers = users =>  ({
    type: GET_USERS,
    users
})