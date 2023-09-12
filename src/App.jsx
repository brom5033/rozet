import React from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Background } from './components/Background';
import { BackgroundWhite } from './components/BackgroundWhite';
import { Backofcard } from './components/Backofcard';

export const App = () => {
	return (
		<>
			<Logo />
			<Button>오늘의운세 확인하기</Button>
			<Background />
			<BackgroundWhite />
			<Backofcard />
		</>
	);
};
