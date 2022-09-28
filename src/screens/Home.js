import { useContext } from "react"
import { HousesContext } from "../context/HousesContext"

const Home = () => {
	const { houses, dispatch } = useContext(HousesContext)
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
						onClick={() =>
							dispatch({
								type: "MODIFY_POINT",
								payload: { houseId: house.id, nbPoint: 1 },
							})
						}
					/>
					<input
						type="button"
						value="+10"
						onClick={() =>
							dispatch({
								type: "MODIFY_POINT",
								payload: { houseId: house.id, nbPoint: 10 },
							})
						}
					/>
					<input
						type="button"
						value="-1"
						onClick={() =>
							dispatch({
								type: "MODIFY_POINT",
								payload: { houseId: house.id, nbPoint: -1 },
							})
						}
					/>
					<input
						type="button"
						value="-10"
						onClick={() =>
							dispatch({
								type: "MODIFY_POINT",
								payload: { houseId: house.id, nbPoint: -10 },
							})
						}
					/>
				</div>
			))}
		</div>
	)
}

export default Home
