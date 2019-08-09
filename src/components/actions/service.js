import { GET_APPLICATION } from '../type';
import api from '../api';
export const getApplications = (applicationsList) => ({
    type: GET_APPLICATION,
    applicationsList: applicationsList
})


export const getApplicationList = () => api.application.getApplicationList();