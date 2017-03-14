// reducers take two things:
// 1. the action ( what happened )
// 2. a copy of the current state

function posts(state = [], action) {
	const i = action.index;
	
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			return [
				...state.slice(0,i), //up until the post we are updating
				{...state[i], likes: state[i].likes +1}, //post we are updating
				...state.slice(i + 1), //all posts after the one we are updating
			]
		default:
			return state;	
	}
}

export default posts;