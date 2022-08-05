import { ingles, navigation } from '../data'

const DATA = "DATA";

const dataInitial = {
    data: ingles,
    nav: navigation
}

export default function dataReducer(state = dataInitial, action) {
    switch (action.type) {
        case DATA: 
            return {...state, data: action.payload[0], nav: action.payload[1]}
        default:
            return state;
    }
}

export const changeLenguage = (data, nav) => async (dispatch) => {
    dispatch({
        type: DATA,
        payload: [data, nav]
    })
}