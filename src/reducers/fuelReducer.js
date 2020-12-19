  
export default function fuelsReducer(state = {}, action) {
	switch (action.type) {
		case 'FETCH_FUELS':
			return {
				fuels: action.payload
			}
		default:
			return state;
    }
}