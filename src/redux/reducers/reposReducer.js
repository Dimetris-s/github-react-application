import { SET_REPOS, SET_CURRENT_PAGE, SET_SEARCH_VALUE} from '../types/types'

const initialState = {
    items: [],
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    searchValue: ''
}

export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count
            }
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        
        default:
            return state
    }
}

