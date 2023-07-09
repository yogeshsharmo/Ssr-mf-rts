import contextReducer from "./ContextReducer";
import userReducer from "./userReducer";
import generalReducer from "./GeneralReducer";

// Support for multiple reducers
export default function mainReducer(state, action) {
	return {
		...contextReducer(state, action),
		...userReducer(state, action),
		...generalReducer(state, action)
	};
}
