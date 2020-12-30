  
export default function distancesReducer(state = {}, action) {
	switch (action.type) {
		case 'FETCH_DISTANCES':
			return {...state,
				distances: action.payload
			}
			
		default:
			return state;
    }
}