import { Link } from "react-router-dom"

import logo from "../logo.svg"
import "./Header.css"

const Header = () => {
	return (
		<header className="header-header">
			<Link to="/">
				<img src={logo} className="Header-logo" alt="logo" />
			</Link>
			<ul className="header-ul">
				<li className="header-link">
					<Link to="/home">Home</Link>
				</li>
				<li className="header-link">
					<Link to="/characters">characters</Link>
				</li>
				<li className="header-link">
					<Link to="/adminHouses">AdminHouses</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
