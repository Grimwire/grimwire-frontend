import React from 'react'
import {Form} from 'react-bootstrap'
import axios from 'axios'

const curr_user = localStorage.user ?  JSON.parse(localStorage.user) : false

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            sent: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        axios
            .get(`https://grimwire.herokuapp.com/api/users/auth/forgottenPassword/${this.state.username}`)
            .then(res => this.setState({sent:true}))
            .catch(err => console.log(err) );
    }

    render() {
        return <div className='tpBlackBg' style={{padding:'10px'}}>
            {
                this.state.sent ?  "Please check your email for the link to reset your password. If you do not see it in a few minutes, check your spam folder." : <div>
                <h2 style={{paddingTop:'30px'}}>Forgot Your Password?</h2>
                <h4>Enter your username & we'll send you a link.</h4>

                <Form onSubmit={this.submitForm} style={{margin:"auto"}}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        onChange={this.handleChange} type="text"
                        name="username" placeholder="username"
                        value={this.state.username} />
                        <Form.Text>Please enter.</Form.Text>
                    </Form.Group>
                </Form>
                </div>
                
            }
        </div>
    }
}

export default Profile
