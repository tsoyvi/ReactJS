import { GET_POSTS, GET_POSTS_LOADING, GET_POSTS_ERROR } from "../actionTypes";

const initialState = {
    posts: [{ "id": "b87", "url": "https://cdn2.thecatapi.com/images/b87.jpg", "width": 500, "height": 515 }],
    loading: false,
    error: null,
}


export const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            }
            
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        default:
            return state
    }
};


//thunk
export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS_LOADING,
        });

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            dispatch({
                type: GET_POSTS,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        dispatch({
            type:GET_POSTS_ERROR,
            payload: error.toString(),
        })
        }
    }
    
}