import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApplicationList from './Application';


// import { Container } from './styles';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                {this.props.isConformed && <div>
                    <ApplicationList {...this.props} />
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
