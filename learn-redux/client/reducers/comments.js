/**
 * Created by matthew.jones on 10/21/2016.
 */

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment,
                },
            ];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1),
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
        case 'REMOVE_COMMENT':
            return {
                ...state,
                [action.postId]: postComments(state[action.postId], action),
            };
        default:
            return state;
    }
}

export default comments;