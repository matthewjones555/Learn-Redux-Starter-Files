/**
 * Created by matthew.jones on 10/21/2016.
 */

//increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,
    };
}

//add coment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    };
}

//remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i,
    };
}