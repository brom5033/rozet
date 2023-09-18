import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { Start } from './pages/Start';
import { Random } from './pages/Random';
import { Result } from './pages/Result';

export const Router = () => {
	return (
		<BrowserRouter basename="/rozet">
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/randomcard" element={<Random />} />
				<Route path="/result" element={<Result />} />
			</Routes>
		</BrowserRouter>
	);
};
