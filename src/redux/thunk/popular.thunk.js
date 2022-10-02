import { fetchPopularRequest, fetchPopularSuccess, fetchPopularFailure } from "../actions/popular.actions";
import fetchPopularReposHttpRequest from "../../api";

export const fetchPopularRepos = (language) => (dispatch)=> {
    dispatch(fetchPopularRequest())
    return fetchPopularReposHttpRequest(language)
    .then(response => dispatch(fetchPopularSuccess(response)))
    .catch(error => dispatch(fetchPopularFailure(error)))
}