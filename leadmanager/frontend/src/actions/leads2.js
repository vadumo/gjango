import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

//GET LEADS
export const getLeads = () => dispatch => {
    axios
        .get("/api/tab2/")
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios
        .delete(`/api/tab2/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

// ADD LEAD
export const addLead = lead => dispatch => {
    axios
        .post("/api/tab2/", lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};