import { useEffect, createContext, useState } from "react"

import axios from "axios"

export const HousesContextv1 = createContext()

const HousesContextProviderv1 = (props) => {
	const [houses, setHouses] = useState([])

	const addPoint = (houseId, nbPoint) => {
		console.log("poulet AddPoint : ", houseId, nbPoint)
		const newState = houses.map((item) => {
			console.log(item)
			if (item.id === houseId) {
				return { ...item, point: item.point + nbPoint }
			} else {
				return item
			}
		})
		setHouses(newState)
	}

	useEffect(() => {
		axios
			.get("http://localhost:4242/houses")
			.then((res) => console.log("poulet", res.data) || setHouses(res.data))
	}, [])
	return (
		<HousesContextv1.Provider value={{ houses, addPoint }}>
			{props.children}
		</HousesContextv1.Provider>
	)
}

export default HousesContextProviderv1
