  
export default function fuelsReducer(state = {}, action) {
    // debugger
	switch (action.type) {
		case 'FETCH_FUELS':
            // debugger
			return {
				fuels: action.payload
			}
		default:
			return state;
    }
    // debugger
}