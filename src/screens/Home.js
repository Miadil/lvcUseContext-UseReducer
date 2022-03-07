import { useContext } from "react"
import { HousesContext } from "../context/HousesContext"

const Home = () => {
	// const [houses, sethouses] = useState([])
	const { houses, addPoint } = useContext(HousesContext)

	return (
		<div>
			{console.log(houses)}
			Houses
			{houses.map((house) => (
				<div key={house.id}>
					{house.houseName}
					<p>{house.point}</p>
					<input
						type="button"
						value="+1"
						onClick={() => addPoint(house.id, 1)}
					/>
					<input
						type="button"
						value="+10"
						onClick={() => addPoint(house.id, 10)}
					/>
					<input
						type="button"
						value="-1"
						onClick={() => addPoint(house.id, -1)}
					/>
					<input
						type="button"
						value="-10"
						onClick={() => addPoint(house.id, -10)}
					/>
				</div>
			))}
		</div>
	)
}

export default Home
