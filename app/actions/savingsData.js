import axios from 'axios'
import { GET_DATA, SAVE_DATA } from './constants'

const URL = 'https://9tm51w73ze.execute-api.eu-central-1.amazonaws.com/latest/api/savings'

export const get_data = (payload) => {
    return {
        type: GET_DATA, 
        payload 
    }
}

export const save_data = (payload) => {
    return {
        type: SAVE_DATA,
        payload
    }
}

export const getSavingsData = () => {
    return function(dispatch) {
        const url = `${URL}`;
        axios.get(url) 
            .then(function(res) {
                dispatch(get_data(res.data))
            })
            .catch(function(err) {
                console.log(err)
            })
    }
}

export const saveSavingsData = () => {
    return function(dispatch) {
        axios.post('/NewAccount', {
            account_name, 
            account_type, 
            interest, 
            savings_amount
        }) 
            .then(function(res) {
                dispatch(save_data(res.data))
            })
            .catch(function(err) {
                console.log(err)
            })
    }
}

