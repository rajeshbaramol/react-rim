import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REGISTER } from "./components/type";

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case USER_REGISTER:
            return action.user;
        default: return state;
    }

}
