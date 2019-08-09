import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import RegisterPage from './components/pages/RegisterPage';
import NavigatorHeader from './components/shell/NavigationMenu';
import AddApplication from './components/pages/AddApplication';



const App = ({ location, isAuthrenticated }) => {
  return (
    <BrowserRouter>
      <div className="container">
        {isAuthrenticated && <NavigatorHeader />}
        <Switch>
          <Route location={location} exact strict path="/" component={HomePage}></Route>
          <Route exact strict path="/login" component={LoginPage}></Route>
          <Route exact strict path="/register" component={RegisterPage}></Route>
          <UserRoute exact strict isAuthrenticated={isAuthrenticated} path="/dashboard" component={Dashboard} />
          <UserRoute exact strict isAuthrenticated={isAuthrenticated} path="/addApplication" component={AddApplication} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthrenticated: PropTypes.bool.isRequired
}
function mapStateToProps(state) {
  return {
    isAuthrenticated: !!state.user.email
  }
};
export default connect(mapStateToProps)(App);
