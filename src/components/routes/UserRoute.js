import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'
const UserRoute = ({ isAutherenticated, component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => isAutherenticated ? <Component isAutherenticated={isAutherenticated} {...props}></Component> : <Redirect to="/" />} />
    );
}
UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAutherenticated: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    isAutherenticated: !!state.user.email
});
export default connect(mapStateToProps)(UserRoute); 