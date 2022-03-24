import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Protected = (props) => {
	const [acces, setAcces] = useState(false)
	const navigate = useNavigate()
	const protectedRoute = () => {
		const token = localStorage.getItem("token")
		axios({
			method: "POST",
			url: "http://localhost:4242/auth/protected",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				console.log(res)
				setAcces(res.data.acces)
			})
			.catch((err) => {
				setAcces(false)
				navigate("/")
			})
	}
	useEffect(() => {
		protectedRoute()
	})
	return <>{acces ? props.children : null}</>
}

export default Protected
