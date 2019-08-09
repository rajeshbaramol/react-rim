import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../type';
import api from '../api';
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})
export const userLoggedOut = (user) => ({
    type: USER_LOGGED_OUT,
    user
})
export const reggisterUser = (user) => ({
    type: USER_LOGGED_IN,
    user
})
export const login = credentials => dispatch => api.user.login(credentials).then(user => {
    console.log(user)
    localStorage.token = user.token;
    dispatch(userLoggedIn(user.user))
});
export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut({}))
};
export const register = details => dispatch => api.user.register(details).then(user => {
    localStorage.token = user.token;
    dispatch(reggisterUser(user))
});