import * as constants from '../constants/constants';

const initialState = {
    results: []
};

export default function newsReducer(state = initialState, action) {
    console.log(action.type);
    switch(action.type) {
        case 'FETCH_NEWS_DATA':
            return {
                ...state,
                results: [...action.payload]
            };

        default: 
        return state;
    }
}