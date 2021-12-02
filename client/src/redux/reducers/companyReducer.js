import {POST_COMPANY, GET_INDIVIDUAL_COMPANY, GET_ALL_COMPANY, UPDATE_COMPANY, DELETE_COMPANY} from '../constants/actionTypes'


export const companyReducers = (companies = [], action) => {
    switch(action.type) {
        case POST_COMPANY:
            return [...companies, action.payload];
        case GET_ALL_COMPANY:
            return action.payload;
        case GET_INDIVIDUAL_COMPANY:
            return action.payload;
        case UPDATE_COMPANY:
            return companies.map((company) => company._id === action.payload._id ? action.payload : company);
        case DELETE_COMPANY:
            return companies.filter((company) => company._id !== action.id);
        default:
            return companies;
    }
};