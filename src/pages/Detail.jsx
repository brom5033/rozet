import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// components
import { Logo, MainContainer, LogoWrap, CardMix } from '@components/index';

export const Detail = () => {
	const navigate = useNavigate();

	const goToStart = () => {
		navigate('/');
	};

	return (
		<MainContainer>
			<LogoWrap onClick={goToStart}>
				<Logo />
			</LogoWrap>
			<BannerWrap>
				<Image src="/images/tarot_women.jpg" alt="tarot_women" />
				<TextWrap>
					<Text>
						타로에 대해 제가 알려드릴게요 <br />
						<TextColor>우선 타로 셔플에 대해 먼저 구경해볼까요?</TextColor> <br />
					</Text>
					<Text>
							아래의 카드를 <TextColor>클릭</TextColor>해주세요!
						</Text>
				</TextWrap>
			</BannerWrap>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 90 }}
					whileTap={{
						scale: 0.9,
						rotate: -90,
						borderRadius: '100%',
					}}
				>
					
				</motion.div>
			</div>
			<CardMix />
		</MainContainer>
	);
};

const BannerWrap = styled.div`
	height: auto;
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
