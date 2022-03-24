import { Routes, Route } from "react-router-dom"

import AdminHouses from "./screens/AdminHouses"
import Header from "./components/Header"
import Characters from "./screens/Characters"
import Home from "./screens/Home"
import HousesContextProvider from "./context/HousesContext"
import Login from "./screens/Login"

import "./App.css"
import Protected from "./components/Protected"

function App() {
	return (
		<div className="App">
			<Header />
			<HousesContextProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route
						path="/adminHouses"
						element={
							<Protected>
								<AdminHouses />
							</Protected>
						}
					/>
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</HousesContextProvider>
		</div>
	)
}

export default App
