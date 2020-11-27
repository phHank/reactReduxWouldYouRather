import { fetchUsers, saveUser } from '../API'

export const ADD_USER = 'ADD_USER'

const newUser = (addUser, id) => ({
    type: ADD_USER,
    addUser,
    username: id
})

export const addNewUser = user => dispatch => {
    saveUser(user)
      .then(addedUser => {
          const {name, id, avatarURL} = addedUser
          
          const addUser = {
              [id]: {
                  id,
                  name,
                  avatarURL,
                  questions: [],
                  answers: {}
              }
          }
    
        dispatch(newUser(addUser, id))
      })
}