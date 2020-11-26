import { saveQuestionAnswer, saveQuestion } from '../API'
export const ANSWER_POLL = 'ANSWER_POLL'
export const ADD_QUESTION = 'ADD_QUESTION'

const savePollAnswer = (question) => ({
    type: ANSWER_POLL,
    question
})

export const handlePollVote = (info) => dispatch => {
  saveQuestionAnswer(info)
      .then(() => {
        const {questions, qid, authedUser, answer} = info
        const question = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
        dispatch(savePollAnswer(question))
      })
      .catch(err => {
        console.log('Error voting: ', err)
        alert('An error occurred while voting, please try again.')
      })
}

const addQuestion = (newQuestion) => ({
  type: ADD_QUESTION,
  newQuestion,
})

export const handleAddQuestion = ({authedUser, optionOne, optionTwo}) => dispatch => {
  saveQuestion({
    author: authedUser, 
    optionOne,
    optionTwo
  })
  .then(question => {
    const qid = question.id 
    const newQuestion = {
      [qid]: {
        ...question
      }
    }

    dispatch(addQuestion(newQuestion))
  })
  .catch(error =>{
    console.log('Error: ', error)
    alert('Error: Question could not be added, try again.')
  })
}