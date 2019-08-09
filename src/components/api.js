import axios from 'axios';
export default {
    user: {
        login: (credentials) => axios.post('http://localhost:4200/api/login', credentials).then(response =>
            response.data
        ),
        register: (data) => axios.post('http://localhost:4200/api/register', data).then(response => {
            console.log(response)
            return response.data
        }
        )
    },
    application: {
        getApplicationList: () => axios.get('http://localhost:4200/api/application-list').then(response => {
            return response.data
        })
    }
}