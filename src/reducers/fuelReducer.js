  
export default function fuelsReducer(
	state = {
		fuels: {}
	},
	action
) {
    debugger
	switch (action.type) {
		case 'FETCH_FUELS':
			return {
				...state,
				fuels: action.payload
			}
		default:
			return state;
	}
}