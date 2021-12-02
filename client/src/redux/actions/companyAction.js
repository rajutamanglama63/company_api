import {POST_COMPANY, GET_INDIVIDUAL_COMPANY, GET_ALL_COMPANY, UPDATE_COMPANY, DELETE_COMPANY} from '../constants/actionTypes'
import axios from 'axios'

export const postCompany = (inputCompany) => async (dispatch) => {
    try {
        const newCompany = await axios.post("/api/company/post", inputCompany);

        dispatch({
            type : POST_COMPANY,
            payload : newCompany.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllCompany = () => async (dispatch) => {
    try {
        const allCompnay = await axios.get("/api/company/");

        dispatch({
            type : GET_ALL_COMPANY,
            payload : allCompnay.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const getIndividualCompany = (id) => async (dispatch) => {
    try {
        const individualCompany = await axios.get(`/api/company/${id}`);

        dispatch({
            type : GET_INDIVIDUAL_COMPANY,
            payload : individualCompany.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateCompany = (id, companyData) => async (dispatch) => {
    try {
        const updatedCompany = await axios.put(`/api/company/${id}`, companyData);

        dispatch({
            type : UPDATE_COMPANY,
            payload : updatedCompany.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteCompany = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/company/${id}`);

        dispatch({
            type : DELETE_COMPANY,
            id
        });
    } catch (error) {
        console.log(error);
    }
}