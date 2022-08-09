import { ingles, navigation } from '../data'

const DATA = "DATA";
const MODAL = "MODAL";
const PROJECT = "PROJECT";

const dataInitial = {
    data: ingles,
    nav: navigation,
    modal: false,
    dataProject: 1
}

export default function dataReducer(state = dataInitial, action) {
    switch (action.type) {
        case DATA: 
            return {...state, data: action.payload[0], nav: action.payload[1]}
        case MODAL: 
            return {...state, modal: action.payload}
        case PROJECT: 
            return {...state, dataProject: action.payload}
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
export const modalChange = (modal) => async (dispatch) => {
    dispatch({
        type: MODAL,
        payload: modal
    })
}
export const projectData = (data) => async (dispatch) => {
    dispatch({
        type: PROJECT,
        payload: data
    })
}