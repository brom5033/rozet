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
import { cardDatas} from '../constants/cardDatas';

export const Random = () => {
	const setCard = useSetRecoilState(cardState);
	const randomCards = cardDatas.sort(() => Math.random() - 0.5);
	const [mixedCards, setMixedCards] = useState(randomCards);
	const mixCard = () => {
		setMixedCards([...mixedCards.sort(() => Math.random() - 0.5)]);
	};
	const navigate = useNavigate();
	const goToResult = (cardName) => {
		setCard(cardName);
		navigate('/result');
	};
	const goToStart = () => {
		navigate('/');
	};
	return (
		<BackgroundBlur>
			<LogoWrap onClick={goToStart}>
				<Logo />
			</LogoWrap>
			<Box>
				<CardWrap>
					{mixedCards.map((card) => {
						return <Backofcard onClick={() => goToResult(card.name)} key={card.name} />;
					})}
				</CardWrap>
				<ButtonWrap>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={mixCard}>
						다시섞기
					</Button>
				</ButtonWrap>
			</Box>
		</BackgroundBlur>
	);
};

const CardWrap = styled.div`
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

const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
`;

const LogoWrap = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 12px;
	padding-bottom: 12px;
`;
