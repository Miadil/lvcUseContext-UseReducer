import { useContext } from "react"
import { HousesContextv1 } from "../context/HousesContextv1"

const Homev1 = () => {
	const { houses, addPoint } = useContext(HousesContextv1)
	return (
		<div>
			{console.log(houses)}
			Houses V1
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

export default Homev1
