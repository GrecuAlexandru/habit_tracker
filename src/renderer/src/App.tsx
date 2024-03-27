import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateHabit from './pages/CreateHabit';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create-habit" element={<CreateHabit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;