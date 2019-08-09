import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class LoginForm extends Component {
    state = {
        data: {},
        loading: false,
        errors: {}
    }
    HandleOnChange = e => {
        this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
    }
    handleSubmit = e => {
        const errors = this.validate(this.state.data);

        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true })
            this.props.submit(this.state.data)
                .catch(err => this.setState({ errors: err.response && err.response.data ? err.response.data.errors : {}, loading: false }));
        }
    }
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Invalid password";
        return errors;
    }
    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="ui container">
                <Form onSubmit={this.handleSubmit} loading={loading}>
                    {errors && errors.global && (
                        <Message negative>
                            <Message.Header>Something Went Wrong</Message.Header>
                            <p>{errors.global}</p>
                        </Message>)}
                    <Form.Field error={!!errors.email}>
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={this.HandleOnChange}

                        />
                        {errors.email && <InlineError text={errors.email}></InlineError>}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={this.HandleOnChange}
                        />
                        {errors.password && <InlineError text={errors.password}></InlineError>}
                    </Form.Field>
                    <Button primary >Login</Button>
                    <div>
                        <h5>Dont't Have Account <Link to="/register">Register</Link>
                        </h5>
                    </div>
                </Form>
            </div>
        );
    }
}
LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;