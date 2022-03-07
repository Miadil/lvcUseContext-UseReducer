import { useEffect, useState, createContext } from "react"
import axios from "axios"

export const HousesContext = createContext()

const HousesContextProvider = (props) => {
	const [houses, setHouses] = useState([])
	const [count, setCount] = useState(0)

	const addPoint = (houseId, nbPoint) => {
		const newState = houses.map((item) => {
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
			.then((res) => console.log(res.data) || setHouses(res.data))
	}, [])

	return (
		<HousesContext.Provider value={{ houses, addPoint }}>
			{props.children}
		</HousesContext.Provider>
	)
}

export default HousesContextProvider
