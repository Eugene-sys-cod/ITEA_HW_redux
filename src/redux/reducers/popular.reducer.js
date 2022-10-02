import { SET_LANGUAGE, FETCH_POPULAR_REQUEST, FETCH_POPULAR_SUCCESS, FETCH_POPULAR_FAILURE  } from "../constants/popular.constants";

const initialStore = {
    selectedLanguage: null,
    data: [],
    loading: false,
    error: null,
}

const popularReducer = (state = initialStore, action ) => {
    
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload                
            }
            
            case FETCH_POPULAR_REQUEST:
                return {
                    ...state,
                    error: null,
                    loading: true
                }
                
            case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_POPULAR_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            default:
                return state
    }
 
}

export default popularReducer