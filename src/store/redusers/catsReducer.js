import { GET_POSTS } from "../actionTypes";

const initialState = {
    posts: [{"id":"b7r","url":"https://cdn2.thecatapi.com/images/b7r.gif","width":320,"height":200}],

}


export const catsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POSTS:
            return {
                ...state,
                posts: action.payload

            }

        default:
            return state
    }
};


//thunk
export const getData = () => {
    
    return async (dispatch) => {
        
console.log('fdfffff');
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        

        dispatch({
            type: GET_POSTS,
            payload: data,
        })
    }

}