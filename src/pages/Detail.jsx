import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
// components
import { Logo, MainContainer, LogoWrap } from '@components/index';

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
			</BannerWrap>
		</MainContainer>
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
	opacity: 0.5;
`;
