import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/auth';
import { Button } from 'semantic-ui-react';

const HomePage = ({ isAuthrenticated, logout }) => (
    <div>
        <h1>HomePage</h1>
        <h1>{isAuthrenticated}</h1>
        {isAuthrenticated ? (
            <Button onClick={() => logout()}>Logout</Button>) : (
                <Link to="/login">Login</Link>)
        }</div>

)
HomePage.propTypes = {
    isAuthrenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}
function mapStateProps(state) {
    console.log(state)
    return {
        isAuthrenticated: !!state.user.email
    }
}

export default connect(mapStateProps, { logout: actions.logout })(HomePage);