/**
 * Created by matthew.jones on 10/21/2016.
 */


//increment likes
function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,
    };
}

//add coment
function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    };
}

//remove comment
function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i,
    };
}