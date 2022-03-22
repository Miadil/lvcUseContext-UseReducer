import { useEffect, useReducer, createContext } from "react"
import { HousesReducer } from "../reducers/HousesReducer"

import axios from "axios"

export const HousesContext = createContext()

const HousesContextProvider = (props) => {
	const [houses, dispatch] = useReducer(HousesReducer, [])

	// const addPoint = (houseId, nbPoint) => {
	// 	console.log("poulet AddPoint : ", houseId, nbPoint)
	// 	const newState = houses.map((item) => {
	// 		console.log(item)
	// 		if (item.id === houseId) {
	// 			return { ...item, point: item.point + nbPoint }
	// 		} else {
	// 			return item
	// 		}
	// 	})
	// 	setHouses(newState)
	// }

	useEffect(() => {
		axios
			.get("http://localhost:4242/houses")
			.then(
				(res) =>
					console.log(res.data) ||
					dispatch({ type: "FETCH_HOUSES", payload: { data: res.data } })
			)
	}, [])

	return (
		<HousesContext.Provider value={{ houses, dispatch }}>
			{props.children}
		</HousesContext.Provider>
	)
}

export default HousesContextProvider
