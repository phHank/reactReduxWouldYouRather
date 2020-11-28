import { saveUser } from '../API'

export const ADD_USER = 'ADD_USER'

const newUser = (addedUser, username) => ({
    type: ADD_USER,
    addedUser,
    username,
})

export const addNewUser = ({name, username, avatarUrl}) => dispatch => {
    const addUser = {
        [username]: {
            id: username,
            name,
            avatarURL: avatarUrl,
            questions: [],
            answers: {}
        }
    }
    
    saveUser(addUser, username)
      .then(addedUser => {
        dispatch(newUser(addedUser, username))
      })
}