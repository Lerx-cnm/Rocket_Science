  
export default function combReducer(state = {}, action) {
	switch (action.type) {
		case 'ADD_COMB':
			return {...state,
				comb: action.payload
			}
		default:
			return state;
    }
}