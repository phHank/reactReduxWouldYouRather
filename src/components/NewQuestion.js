import {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOptionOne = event => {
        this.setState(() => ({
          optionOne: event.target.value  
        }))
    }

    handleOptionTwo = event => {
        this.setState(() => ({
          optionTwo: event.target.value  
        }))
    }

    handleSubmit = event => {
        event.preventDefault()
        const {users, authedUser, dispatch} = this.props
        const {optionOne, optionTwo} = this.state
        
        dispatch(handleAddQuestion({
            authedUser,
            optionOne,
            optionTwo,
            user: users[authedUser]
        }))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            submitted: true
        }))
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.submitted && (<Redirect to='/' />)}
                <h3>Would you rather...</h3>
                <br></br>
                <div>
                    <input 
                        type='text'
                        placeholder='Option One'
                        onChange={this.handleOptionOne}
                        value={this.state.optionOne} />
                </div>
                <br></br>
                <div>
                    <input 
                        type='text'
                        placeholder='Option Two'
                        onChange={this.handleOptionTwo}
                        value={this.state.optionTwo} />
                </div>
                <br></br>
                <div>
                    <button 
                    className='mb-2'
                    type='submit' 
                    disabled={this.state.optionOne === '' || this.state.optionTwo === '' }>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({users, questions, authedUser}) => ({
    users, 
    questions, 
    authedUser
})

export default connect(mapStateToProps)(NewQuestion)