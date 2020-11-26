import {Component} from 'react'
import {connect} from 'react-redux'

class PollDisplay extends Component {
    state = {
        displaying: 'Unanswered'
    }

    handleToggle = event => {
        event.preventDefault()

        this.setState((curState) => (
            curState.displaying === 'Unanswered'
                ? {displaying: 'Answered'} 
                : {displaying: 'Unanswered'}
        ))
    }
    
    render() {
        const {questions, authedUser} = this.props
        // filters questions if already answered and sorts by timestamp
        const sortedQuestions = Object.keys(questions)
            .map(questionID => questions[questionID])
            .filter(question => (
                this.state.displaying === 'Unanswered'
                ? !([...question.optionOne.votes, ...question.optionTwo.votes].includes(authedUser))
                :  ([...question.optionOne.votes, ...question.optionTwo.votes].includes(authedUser))
                ))
                .sort((a,b) => b.timestamp - a.timestamp)

        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-light border border-primary ml-5 text-dark m-1' onClick={this.handleToggle}>
                        <img 
                          src={process.env.PUBLIC_URL + '/shuffle.png'}
                          alt={`Switch to display ${this.state.displaying === 'Unanswered' ? 'Answered' : 'Unanswered'} questions`} 
                          />
                    </button>  
                    <h2 >{this.state.displaying} Polls:</h2>
                </div>
                <ul className='d-flex justify-content-center mw-100'>
                    {sortedQuestions.map(question => (
                        <li className='btn border border-primary m-1' key={question.id}>
                            <h6 className='d-flex justify-content-center'>Would you rather...</h6>
                            <p>{question.optionOne.text}</p> 
                            <p className='text-muted'>or</p> 
                            <p>{question.optionTwo.text}</p>
                            { question.author === authedUser 
                              ? (<small className='text-muted'>By: &#128527; you</small>)
                              : (<small className='text-muted'>By: {question.author}</small>)
                            }
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => ({
    questions, 
    authedUser
})

export default connect(mapStateToProps)(PollDisplay)
