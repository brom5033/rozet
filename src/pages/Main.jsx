import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// components
import { Logo, Button, MainContainer, LogoWrap } from '@components/index';

export const Main = () => {
	const navigate = useNavigate();
	const goToRandom = () => {
		navigate('/randomcard');
	};

	const goToDetail = () => {
		navigate('/detail');
	};
	const goToStart = () => {
		navigate('/');
	};

	return (
		<MainContainer>
			<div>
				<LogoWrap onClick={goToStart}>
					<Logo />
				</LogoWrap>
				<ImgWrap>
					<BannerImg src="/rozet/images/tarot-banner.png" alt="tarot-image" />
					<TextWrap>
						<span style={{ color: '#ffffff' }}>타로 카드에 대해 </span>알고계신가요? <br />
						이미 알고 계신다면 <span style={{ color: '#ffffff' }}>오늘의 운세를</span> <br />
						아직 타로카드에 대해 잘 모르신다면 <span style={{ color: '#ffffff' }}>알아보기</span>를
						클릭해주세요!
					</TextWrap>
					<ButtonWrap>
						<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={goToRandom}>
							오늘의운세 확인하기
						</Button>
					</ButtonWrap>
					<MoveButtonWrap>
						<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={goToDetail}>
							알아보기
						</Button>
					</MoveButtonWrap>
				</ImgWrap>
			</div>
		</MainContainer>
	);
};

const BannerImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 1250px;
	max-height: 600px;
	opacity: 0.3;
	border-radius: 30px;
`;

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (max-width: 767px) {
		height: 100vh;
	}
`;

const TextWrap = styled.div`
	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #d4beb0;
	font-size: 22px;
	font-weight: 400;
	text-align: center;
	font-family: jua;
`;

const ButtonWrap = styled(motion.div)`
	position: absolute;
	top: 74%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const MoveButtonWrap = styled(motion.div)`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	@media screen and (max-width: 767px) {
		top: 63%;
	}
`;
