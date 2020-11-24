import { saveQuestionAnswer } from '../API'
export const ANSWER_POLL = 'ANSWER_POLL'

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