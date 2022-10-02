import { SET_LANGUAGE, FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS, FETCH_POPULAR_FAILURE } from "../constants/popular.constants"

export const setLanguageAction = (payload) => ({
    type: SET_LANGUAGE,
    payload 
})

export const fetchPopularRequest = () => ({
    type: FETCH_POPULAR_REQUEST
})

export const fetchPopularSuccess = (payload) => ({
    type: FETCH_POPULAR_SUCCESS,
    payload
})

export const fetchPopularFailure = (payload) => ({
    type: FETCH_POPULAR_FAILURE,
    payload
})