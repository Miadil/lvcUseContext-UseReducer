export const HousesReducer = (state, action) => {
	switch (action.type) {
		case "MODIFY_POINT":
			const newState = state.map((item) => {
				console.log(item)
				if (item.id === action.payload.houseId) {
					return { ...item, point: item.point + action.payload.nbPoint }
				} else {
					return item
				}
			})
			return newState
		case "FETCH_HOUSES":
			return action.payload.data
		default:
			return state
	}
}
