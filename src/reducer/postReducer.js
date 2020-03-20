import { FETCH_POSTS } from '../actions/type'

const initalstate = {
    items: [],
    item: {}
}

export default function(state = initalstate, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

       

        default:
            return state;
    }
}