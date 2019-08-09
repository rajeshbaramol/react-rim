import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class LoginPage extends Component {
    submit = (data) => this.props.login(data).then(() => {
        console.log("enterred")
        this.props.history.push("/dashboard")
    });

    render() {
        return (
            <div className="ui container">
                <h1>Login Form</h1>
                <LoginForm submit={this.submit}></LoginForm>
            </div>
        );
    }
}
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);