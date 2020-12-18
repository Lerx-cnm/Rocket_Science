  
export default function combReducer(state = {}, action) {
    // debugger
	switch (action.type) {
		case 'ADD_COMB':
            // debugger
			return {...state,
				comb: action.payload
			}
		default:
			return state;
    }
    // debugger
}