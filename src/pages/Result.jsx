import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// store
import { cardState } from '../stores/card';
//constants
import { cardData } from '../constants/cardData';
// utils
import { findCard } from '../utils/findCard';
// components
import { BackgroundBlur } from '../components/BackgroundBlur';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Box } from '../components/Box';

export const Result = () => {
	const cardName = useRecoilValue(cardState);
	const card = findCard(cardData, cardName)[0];
	const navigate = useNavigate();
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
					<CardContainer>
						<img src={card.img} alt="card.img" />
					</CardContainer>
					<CardContainer marginLeft>
						<h1>{card.name}</h1>
						<ScoreGauge>
							<p>게이지</p>
							<ScoreGaugeOut>
								<ScoreGaugeIn percent={card.score} />
							</ScoreGaugeOut>
							<GaugeText>
								<Text>나쁨</Text> <Text>보통</Text> <Text>좋음</Text>
							</GaugeText>
						</ScoreGauge>
						<div>
							<p>키워드</p>
							<p>{card.keyword}</p>
						</div>
						<div>
							<p>상세설명</p>
							<p>{card.description}</p>
						</div>
					</CardContainer>
				</Container>
				<ButtonContainer>
					<Button onClick={goToStart}>다시하기</Button>
				</ButtonContainer>
			</Box>
		</BackgroundBlur>
	);
};

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 12px;
	padding-bottom: 12px;
`;

const Container = styled.div`
	width: 710px;
	height: 600px;
	display: flex;
	/* flex-wrap: wrap; */
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

// 카드 내용
const CardContainer = styled.div`
	font-family: Jua;
	font-size: 18px;
	display: flex;
	flex-wrap: wrap;
	${(props) => (props.marginLeft ? 'margin-left:30px' : '')}
`;
// 게이지
const ScoreGauge = styled.div``;
const GaugeText = styled.div`
	display: flex;
	justify-content: space-around;
`;

const ScoreGaugeOut = styled.div`
	background-color: #8c8581;
	border-radius: 45px;
	width: 305px;
	height: 26px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
`;

const ScoreGaugeIn = styled.div`
	width: ${(props) => props?.percent}%;
	height: 14px;
	flex-shrink: 0;
	border-radius: 45px;
	background: #242840;
	/* margin-left: 8px; */
`;

const Text = styled.p`
	margin: 8px;
	font-size: 14px;
`;
