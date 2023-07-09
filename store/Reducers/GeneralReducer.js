// General Reducer Functions
export default function generalReducer(state, action) {
	switch (action?.type) {
		case "EDIT": {
			state[action.key] = action.state
			return state;
		}  
		default: {
			return state;
		}
	}
}