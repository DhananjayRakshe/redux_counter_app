const counter = (state = 1, action) => {
	switch (action.type) {
		case "INCREAMENT":
			return state + 1;
		case "DECREAMENT":
			return state - 1;
		default:
			return state;
	}
};

export default counter;
