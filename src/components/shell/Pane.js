import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class Pane extends Component {
    handleClick = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <Menu borderless>
                    <Menu.Item><Link to='/addApplication'><Icon className="add circle" size='large' ></Icon></Link></Menu.Item>
                    <Menu.Item><Icon className="add circle" size='large'></Icon></Menu.Item>
                    <Menu.Item><Icon className="add circle" size='large'></Icon></Menu.Item>
                </Menu>
            </React.Fragment>
        );
    }
}
Pane.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
}
function mapStateToProps(state) {
    return {
        isAuthrenticated: !!state.user.email
    }
};

export default connect(mapStateToProps)(Pane);