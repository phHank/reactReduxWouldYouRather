import {Component} from 'react'
import {connect} from 'react-redux'
import {clearAuthedUser} from '../actions/authedUser'

class Logout extends Component {
    handleLogout = event => {
        event.preventDefault()

        this.props.dispatch(clearAuthedUser())
    }

    render() {
        return (
            <button className='btn btn-primary text-dark' onClick={this.handleLogout}>
                Logout
            </button>
        )
    }
}

export default connect()(Logout)