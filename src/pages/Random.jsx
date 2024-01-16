import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { motion } from 'framer-motion';
// stores
import { cardState } from '@stores/card';
//utils
import { mixArray } from '@utils/mixArray';
// components
import { Logo, Button, Box, Backofcard, LogoWrap } from '@components/index';
// constants
import { cardDatas } from '@constants/cardDatas';

export const Random = () => {
	const setCard = useSetRecoilState(cardState);

	const randomCards = mixArray(cardDatas);
	const [mixedCards, setMixedCards] = useState(randomCards);

	const navigate = useNavigate();
	const goToResult = (cardName) => {
		setCard(cardName);
		navigate('/result');
	};
	const goToStart = () => {
		navigate('/');
	};

	const [color, setColor] = useState('#000000');

	const generateRandomColor = () => {
		// 랜덤 색상을 생성하는 함수
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		return randomColor;
	};

	const changeColor = () => {
		const newColor = generateRandomColor();
		setColor(newColor);
		setMixedCards(mixArray([...mixedCards]));
	};

	return (
		<MotionContainer animate={{ backgroundColor: color }} transition={{ duration: 1 }}>
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
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={changeColor}>
						다시섞기
					</Button>
				</ButtonWrap>
			</Box>
		</MotionContainer>
	);
};

const CardWrap = styled.div`
	width: 710px;
	height: auto;
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
	margin-top: 40px;
`;

const MotionContainer = styled(motion.div)`
	width: 100vw;
	height: auto;
	background-color: color;
`;
