import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// components
import { Box, Button } from '@components/index';

export const CardShuffle = () => {
	const initialCards = [...Array(22).keys()].map((k) => ({
		id: k,
		x: 0,
		y: 0,
		rotate: 0,
	}));
	const [cards, setCards] = useState(initialCards);

	const shuffleCards = () => {
		// 카드를 무작위 위치로 이동
		const shuffledCards = cards.map((card) => ({
			...card,
			x: Math.random() * 100 - 50,
			y: Math.random() * 100 - 50,
			rotate: Math.random() * 360,
		}));

		setCards(shuffledCards);

		// 일정 시간 후에 카드를 원래 위치로 되돌림
		setTimeout(() => {
			setCards(initialCards);
		}, 1000); // 2초 후에 원래 위치로 복귀
	};

	return (
		<ConTainer>
			<Box>
				<CardWrap>
					{cards.map((card) => (
						<AnimatedCard
							key={card.id}
							src="/images/tarot-background2.jpg"
							alt="backofcard"
							animate={{ x: card.x, y: card.y, rotate: card.rotate }}
							transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						/>
					))}
				</CardWrap>
				<ButtonWrap>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={shuffleCards}>
						다시섞기
					</Button>
				</ButtonWrap>
			</Box>
		</ConTainer>
	);
};

const ConTainer = styled.div`
	height: '100vh';
	background-color: 'black';
`;

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
	margin-top: 80px;
`;

const AnimatedCard = styled(motion.img)`
	width: 80px;
	height: 126px;
	position: relative;
`;
