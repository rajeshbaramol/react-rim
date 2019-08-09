import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationList from './Application';
import Pane from '../shell/Pane';

// import { Container } from './styles';

class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                {this.props.isConformed && <div>
                    <Pane></Pane>
                    <ApplicationList />
                </div>}
            </div>
        )
    }
}
Dashboard.propTypes = {
    isConformed: PropTypes.bool.isRequired
}
const mapStateToProps = state => {
    return {
        isConformed: !!state.user.email
    }
}
export default connect(mapStateToProps)(Dashboard);
