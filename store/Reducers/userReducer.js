export default function userReducer(state, action) {
	switch (action?.type) {
		case "decrement": {
			return {
				...state,
				num: state.num - 1,
			};
		}
		default: {
			return state;
		}
	}
}