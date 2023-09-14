import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { BackgroundBlur } from '../components/BackgroundBlur';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Box } from '../components/Box';
import { cardData } from '../constants/cardData';
import { Backofcard } from '../components/Backofcard';

export const Random = () => {
	const randomCard = cardData.sort(() => Math.random() - 0.5);
	const [mixedCard, setMixedCard] = useState(randomCard);
	const mixCard = () => {
		setMixedCard([...mixedCard.sort(() => Math.random() - 0.5)]);
	};
	const navigate = useNavigate();
	const goToResult = (cardName) => {
		navigate('/result');
		console.log(cardName);
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
						return <Backofcard onClick={()=>goToResult(card.name)} key={card.name} />;
					})}
				</Container>
				<ButtonContainer>
					<Button onClick={mixCard}>다시섞기</Button>
				</ButtonContainer>
			</Box>
		</BackgroundBlur>
	);
};

const Container = styled.div`
	width: 710px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	margin: auto;
	margin-top: 80px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 80px;
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 12px;
	padding-bottom: 12px;
`;
