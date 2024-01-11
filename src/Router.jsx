import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { Start } from '@pages/Start';
import { Random } from '@pages/Random';
import { Result } from '@pages/Result';
import { Main } from '@pages/Main';
import { Detail } from '@pages/Detail';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Start />} />
				<Route path="/randomcard" element={<Random />} />
				<Route path="/result" element={<Result />} />
				<Route path="/main" element={<Main />} />
				<Route path="/detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
};
