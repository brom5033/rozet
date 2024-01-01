import React, { useState, useRef } from 'react';
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

	const [isAnimating, setIsAnimating] = useState(false);
	const imageRef = useRef(null); // 이미지 참조 생성

	const handleImageClick = () => {
		if (!isAnimating) {
			setIsAnimating(true);
	
			const startY = window.scrollY;  // 초기 스크롤 위치
			const endY = startY + 300;      // 이미지가 아래로 이동할 거리
	
			let currentTime = 0;
	
			// 스크롤 애니메이션 함수
			const animateScroll = (duration) => {
				currentTime += 1 / 60;  // 애니메이션 프레임 업데이트
	
				const progress = currentTime / duration;  // 진행률 계산
				const val = easeInOutQuad(progress);  // 부드러운 애니메이션을 위한 이징 함수
	
				window.scrollTo(0, startY + (endY - startY) * val);
	
				if (currentTime < duration) {
					requestAnimationFrame(() => animateScroll(duration));
				}
			};
	
			// 애니메이션 실행
			animateScroll(2);  // 2초 동안 애니메이션 실행
		} else {
			setIsAnimating(false);
		}
	};
	
	// 이징 함수 예시 (부드러운 애니메이션을 위해)
	function easeInOutQuad(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	}
	

	const variants = {
		initial: {
			scale: 1,
			y: 0,
		},
		animate: {
			scale: 1.5, // 확대될 크기
			y: 300, // 아래로 이동할 거리
		},
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
				<CardWrap>
					<AnimatedImage
						ref={imageRef} // 참조 연결
						src="/images/tarot-background2.jpg"
						alt="backofcard"
						variants={variants}
						animate={isAnimating ? 'animate' : 'initial'}
						onClick={handleImageClick}
					/>
				</CardWrap>
			</BannerWrap>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<motion.div
					whileHover={{ scale: 1.2, rotate: 90 }}
					whileTap={{
						scale: 0.9,
						rotate: -90,
						borderRadius: '100%',
					}}
				></motion.div>
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
