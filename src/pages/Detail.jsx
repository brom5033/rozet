import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// components
import { Logo, MainContainer, LogoWrap, CardShuffle, ShuffleDetail, Button } from '@components/index';

export const Detail = () => {
	const navigate = useNavigate();

	const goToStart = () => {
		navigate('/');
	};

	const goToRandom = () => {
		navigate('/randomcard');
	};

	const [isAnimating, setIsAnimating] = useState(false);

	const handleCardClick = () => {
		window.scrollBy({
			top: window.innerHeight,
			behavior: 'smooth',
		});
		setIsAnimating(true);
	};

	const variants = {
		initial: {
			scale: 1,
			y: 0,
		},
		animate: {
			scale: 1.5,
			y: 0,
		},
	};

	return (
		<div style={{ backgroundColor: '#000' }}>
			<MainContainer>
				<LogoWrap onClick={goToStart}>
					<Logo />
				</LogoWrap>
				<BannerWrap>
					<Image src="/rozet/images/tarot_women.jpg" alt="tarot_women" />
					<TextWrap>
						<Text>
							타로에 대해 제가 알려드릴게요 <br />
							<TextColor>우선 타로 셔플에 대해 먼저 구경해볼까요?</TextColor> <br />
						</Text>
						<Text>
							아래의 카드를 <TextColor>클릭</TextColor>해주세요!
						</Text>
					</TextWrap>
					<CardWrap>
						<AnimatedImage
							src="rozet/images/tarot_background2.png"
							alt="backofcard"
							variants={variants}
							animate={isAnimating ? 'animate' : 'initial'}
							onClick={handleCardClick}
						/>
					</CardWrap>
				</BannerWrap>
			</MainContainer>
			<div style={{ marginTop: '60px' }}>
				<CardShuffle />
			</div>
			<ShuffleDetail />
			<ButtonWrap onClick={goToRandom}>
				<Button>오늘의 운세 확인하기</Button>
			</ButtonWrap>
		</div>
	);
};

const BannerWrap = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	max-height: 500px;
	width: 100%;
	max-width: 1250px;
	opacity: 0.4;
`;

const TextWrap = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0.8;
`;

const Text = styled.p`
	color: #fff;
	font-size: 30px;
	font-family: Jua;
	text-align: center;
	font-size: 25px;
`;

const TextColor = styled.span`
	color: #d4beb0;
`;

const CardWrap = styled.div`
	position: absolute;
	top: 75%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const AnimatedImage = styled(motion.img)`
	width: 80px;
	height: 130px;
`;

const ButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 12px;
`;
