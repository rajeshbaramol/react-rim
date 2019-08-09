import React, { Component } from 'react';
import RegisterForm from '../forms/RegisterForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
class RegisterPage extends Component {
    submit = (data) => this.props.register(data).then(() => {
        console.log("registered and Logged")
        this.props.history.push("/dashboard")
    });
    render() {
        return (<div>
            <h1>Registration Form</h1>
            <RegisterForm submit={this.submit}></RegisterForm>
        </div>

        );
    }
}

RegisterPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(RegisterPage);