  
export default function distancesReducer(state = {}, action) {
    // debugger
	switch (action.type) {
		case 'FETCH_DISTANCES':
            // debugger
			return {
				distances: action.payload
			}
		default:
			return state;
    }
    // debugger
}