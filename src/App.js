import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import AdminHouses from "./screens/AdminHouses"
import Home from "./screens/Home"
import Characters from "./screens/Characters"
import HousesContextProvider from "./context/HousesContext"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />

			<HousesContextProvider>
				<Home />
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/adminHouses" element={<AdminHouses />} />
					<Route path="/characters" element={<Characters />} />
				</Routes> */}
			</HousesContextProvider>
		</div>
	)
}

export default App
