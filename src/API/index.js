import * as API from './_DATA'

export const fetchUsers = () => API._getUsers()

export const fetchQuestions = () => API._getQuestions()

export const saveQuestion = question => API._saveQuestion(question)

export const saveQuestionAnswer = info => API._saveQuestionAnswer(info)

export const saveUser = user => API._saveUser(user)