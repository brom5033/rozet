import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// components
import { Logo, MainContainer, LogoWrap, Backofcard } from '@components/index';

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
						타로에 대해 궁금하신가요? <br />
						<TextColor>저를 따라오세요</TextColor>
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
					<Backofcard />
				</motion.div>
			</div>
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
