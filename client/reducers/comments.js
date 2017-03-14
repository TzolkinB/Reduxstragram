// comments handles entire comments state and postComments will handle update of individual comment

function postComments(state=[], action) {
	const i = action.index;

	switch(action.type) {
		case 'ADD_COMMENT' :
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT' :
			return [
				...state.slice(0, i), // up until comment to be deleted
				...state.slice(i + 1) // after comment to delete
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			...state, //take current state
			[action.postId]: postComments(state[action.postId], action)// overwrite this post with new one
		}
	}
	return state;
}

export default comments;