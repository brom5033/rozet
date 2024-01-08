import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
// store
import { cardState } from '@stores/card';
//constants
import { cardDatas } from '@constants/cardDatas';
// utils
import { findCard } from '@utils/findCard';
// components
import { BackgroundBlur, Logo, Button, Box, LogoWrap } from '@components/index';

export const Result = () => {
	const cardName = useRecoilValue(cardState);
	const card = findCard(cardDatas, cardName);

	const navigate = useNavigate();
	const goToStart = () => {
		navigate('/');
	};

	return (
		<BackgroundBlur>
			<LogoWrap onClick={goToStart}>
				<Logo />
			</LogoWrap>
			<Box>
				<Container>
					<CardWrap
						initial={{ opacity: 0 }}
						animate={{ opacity: card.img ? 1 : 0 }}
						transition={{ duration: 0.5 }}
					>
							<img src={`${card.img}.jpg`} alt={card.name} width="200px" height="330px" />
					</CardWrap>
					<CardWrap marginLeft>
						<h1>{card.name}</h1>
						<div>
							<p>오늘의 점수 ({card.score}점)</p>
							<Progress>
								<ProgressBar
									percent={card.score}
									initial={{ width: 0 }}
									animate={{ width: card.score ? `${card.score}%` : '0px' }}
									exit={{ width: '0px' }}
									transition={{ duration: 1 }}
								/>
							</Progress>
							<ProgressLabel>
								<Text>나쁨</Text> <Text>보통</Text> <Text>좋음</Text>
							</ProgressLabel>
						</div>
						<div style={{ marginLeft: '24px' }}>
							<p>키워드</p>
							<strong>{card.keyword}</strong>
						</div>
						<div>
							<p>상세설명</p>
							<p>{card.description}</p>
						</div>
					</CardWrap>
				</Container>
				<ButtonWrap>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={goToStart}>
						다시하기
					</Button>
				</ButtonWrap>
			</Box>
		</BackgroundBlur>
	);
};

const Container = styled.div`
	width: 710px;
	height: auto;
	display: flex;
	gap: 10px;
	justify-content: center;
	margin: auto;
	margin-top: 80px;
	@media screen and (max-width: 767px) {
		width: 100%;
		height: auto;
		flex-wrap: wrap;
	}
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
`;

// 카드 내용
const CardWrap = styled(motion.div)`
	font-family: Jua;
	font-size: 18px;
	display: flex;
	flex-wrap: wrap;
	${(props) => (props.marginLeft ? 'margin-left:30px;' : '')}
	@media screen and (max-width: 767px) {
		margin-left: 0px;
		padding: 24px;
	}
`;
// 게이지
const ProgressLabel = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Progress = styled.div`
	background-color: #8c8581;
	border-radius: 45px;
	width: 305px;
	height: 26px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
`;

const ProgressBar = styled(motion.div)`
	width: ${(props) => props?.percent}%;
	height: 14px;
	flex-shrink: 0;
	border-radius: 45px;
	background: #242840;
`;

const Text = styled.p`
	margin: 8px;
	font-size: 14px;
`;
