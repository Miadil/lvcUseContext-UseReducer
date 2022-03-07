import { Link } from "react-router-dom"

import logo from "../logo.svg"

const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<Link to="/">Home</Link>
			<Link to="/characters">characters</Link>
			<Link to="/adminHouses">AdminHouses</Link>
		</header>
	)
}

export default Header
