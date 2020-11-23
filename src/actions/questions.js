export const GET_QUESTIONS = 'GET_QUESTIONS'

export const receiveQuestions = questions =>  ({
    type: GET_QUESTIONS,
    questions
})