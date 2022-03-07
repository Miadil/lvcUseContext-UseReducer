import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"

const Characters = () => {
	const [datas, setDatas] = useState([])
	useEffect(() => {
		axios
			.get("http://localhost:4242/characters")
			.then((res) => console.log(res.data) || setDatas(res.data))
	}, [])

	return (
		<div>
			pouelt Characters
			{datas.map((data) => (
				<Card key={data.id} {...data} />
			))}
		</div>
	)
}

export default Characters
