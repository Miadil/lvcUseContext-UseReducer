import { useState } from "react"
import axios from "axios"

import "./Login.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(email, password)
		axios
			.post("http://localhost:4242/auth/login", {
				username: email,
				password: password,
			})
			.then((res) => {
				console.log("ress poulet :", res)
				localStorage.setItem("token", res.headers["x-access-token"])
				// console.log("token", localStorage.getItem("token"))
			})
	}
	return (
		<div className="contentGlob">
			<div className="login">
				<form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
					<span className="loginTitle">S'identifier</span>
					<label className="loginLabel">
						<input
							type="email"
							name="email"
							placeholder="momo@gmail.com"
							className="loginInput"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label className="loginLabel">
						<input
							type="password"
							name="password"
							placeholder="mot de passe"
							className="loginInput"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<input type="submit" value="S'identifier" className="loginSubmit" />
				</form>
			</div>
		</div>
	)
}

export default Login
