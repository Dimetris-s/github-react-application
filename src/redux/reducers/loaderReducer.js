import { SET_LOADING } from "../types/types"

const initialState = {
    reposLoading: false,
    currentRepoLoading: true
}

export function loaderReducer(state = initialState, action) {
    switch (action.type) {

        case SET_LOADING:
            const loaderType = Object.keys(action.payload)[0]
            return {
                ...state,
                [loaderType]: action.payload[loaderType]
            }
        default:
            return state
    }
}