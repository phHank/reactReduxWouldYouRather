import { saveQuestionAnswer, saveQuestion } from '../API'
export const ANSWER_POLL = 'ANSWER_POLL'
export const ADD_QUESTION = 'ADD_QUESTION'

const savePollAnswer = (question, userUpdate) => ({
    type: ANSWER_POLL,
    question,
    userUpdate
})

export const handlePollVote = info => dispatch => {
  saveQuestionAnswer(info)
      .then(() => {
        const {questions, qid, authedUser, answer, user} = info
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
        const userUpdate = {
          [authedUser]: {
            ...user,
            answers: {
              ...user.answers,
              [qid]: answer
            }
          }
        }

        dispatch(savePollAnswer(question, userUpdate))
      })
      .catch(err => {
        console.log('Error voting: ', err)
        alert('An error occurred while voting, please try again.')
      })
}

const addQuestion = (newQuestion, userUpdate) => ({
  type: ADD_QUESTION,
  newQuestion,
  userUpdate
})

export const handleAddQuestion = ({authedUser, optionOne, optionTwo, user}) => dispatch => {
  saveQuestion({
    author: authedUser, 
    optionOneText: optionOne,
    optionTwoText: optionTwo
  })
  .then(question => {
    const qid = question.id 
    const newQuestion = {
      [qid]: {
        ...question
      }
    }
    const userUpdate = {
      [authedUser]: {
        ...user,
        questions: user.questions.concat([qid])
      }
    }

    dispatch(addQuestion(newQuestion, userUpdate))
  })
  .catch(error =>{
    console.log('Error: ', error)
    alert('Error: Question could not be added, try again.')
  })
}