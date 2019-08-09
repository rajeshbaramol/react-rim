import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const NavigatorHeader = ({ user, logout }) => {
    return (
        <div className="headerclass">
            <Menu secondary pointing >
                <Menu.Item as={Link} to="/dashboard">DashBoard</Menu.Item>
                <Menu.Item as={Link} to="/about">About</Menu.Item>
                <Menu.Item position="right"  >
                    <Dropdown trigger={<Image avatar />} >
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => logout()} value=""> Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </div>);
}
NavigatorHeader.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateProps, { logout })(NavigatorHeader);
