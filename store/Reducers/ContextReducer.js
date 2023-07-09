export default function contextReducer(state, action) {
	switch (action?.type) {
		case "increment": {
			state.num = state.num + 1
			return state;
		}
		default: {
			return state;
		}
	}
}