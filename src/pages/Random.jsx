import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

// stores
import { cardState } from '../stores/card';

// components
import { BackgroundBlur } from '../components/BackgroundBlur';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Box } from '../components/Box';
import { Backofcard } from '../components/Backofcard';

// constants
import { cardData } from '../constants/cardData';

export const Random = () => {
	const cardSet = useSetRecoilState(cardState);
	const randomCard = cardData.sort(() => Math.random() - 0.5);
	const [mixedCard, setMixedCard] = useState(randomCard);
	const mixCard = () => {
		setMixedCard([...mixedCard.sort(() => Math.random() - 0.5)]);
	};
	const navigate = useNavigate();
	const goToResult = (cardName) => {
		cardSet(cardName);
		navigate('/result');
	};
	const goToStart = () => {
		navigate('/');
	};
	return (
		<BackgroundBlur>
			<LogoContainer onClick={goToStart}>
				<Logo />
			</LogoContainer>
			<Box>
				<Container>
					{mixedCard.map((card) => {
						return <Backofcard onClick={() => goToResult(card.name)} key={card.name} />;
					})}
				</Container>
				<ButtonContainer>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={mixCard}>
						다시섞기
					</Button>
				</ButtonContainer>
			</Box>
		</BackgroundBlur>
	);
};

const Container = styled.div`
	width: 710px;
	height: 600px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	margin: auto;
	margin-top: 80px;
	@media screen and (max-width: 767px) {
		width: 100%;
		height: auto;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 12px;
	padding-bottom: 12px;
`;
