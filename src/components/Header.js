import { Link } from "react-router-dom"

import logo from "../logo.svg"

const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<Link to="/house">house</Link>
			<Link to="/housev1">housev1</Link>
			<Link to="/">characters</Link>
			<Link to="/adminHouses">AdminHouses</Link>
		</header>
	)
}

export default Header
