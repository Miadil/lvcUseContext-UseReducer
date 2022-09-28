import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import AdminHouses from "./screens/AdminHouses"
import Home from "./screens/Home"
import Homev1 from "./screens/Homev1"
import HousesContextProvider from "./context/HousesContext"
import Characters from "./screens/Characters"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<HousesContextProvider>
				<Routes>
					<Route path="/" element={<Characters />} />
					<Route path="/housev1" element={<Homev1 />} />
					<Route path="/house" element={<Home />} />
					<Route path="/adminHouses" element={<AdminHouses />} />
				</Routes>
			</HousesContextProvider>
		</div>
	)
}

export default App
