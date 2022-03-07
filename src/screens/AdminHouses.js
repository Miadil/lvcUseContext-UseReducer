import axios from "axios"
import { useEffect, useState } from "react"

const AdminHouses = () => {
	const [houseName, sethouseName] = useState([])
	const [houses, sethouses] = useState([])

	const postData = () => {
		axios
			.post("http://localhost:4242/houses", { houseName })
			.then((res) => console.log(res.data))
	}

	useEffect(() => {
		axios
			.get("http://localhost:4242/houses")
			.then((res) => console.log(res.data) || sethouses(res.data))
	}, [])

	return (
		<div>
			<input
				type="text"
				value={houseName}
				onChange={(e) => sethouseName(e.target.value)}
			/>
			<input type="button" value="add new House" onClick={postData} />
			{houses.map((data) => (
				<div>{data.houseName}</div>
			))}
		</div>
	)
}

export default AdminHouses
