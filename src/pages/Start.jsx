import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
//components
import { Background, Logo, Button, LogoWrap } from '@components/index';

export const Start = () => {
	const navigate = useNavigate();
	const goToMain = () => {
		navigate('/main');
	};

	return (
		<>
			<BackgroundWrap>
				<Background />
			</BackgroundWrap>
			<Right>
				<LogoWrap>
					<Logo />
				</LogoWrap>
				<ButtonWrap>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={goToMain}>
						시작하기
					</Button>
				</ButtonWrap>
				<GithubWrap>
					<GithubLink href="https://github.com/brom5033/rozet" target="_blank">
						GithubLink
					</GithubLink>
				</GithubWrap>
			</Right>
		</>
	);
};

const BackgroundWrap = styled.div`
	display: block;
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const Right = styled.div`
	position: absolute;
	right: 0;
	width: 400px;
	height: 80vh;
	transform: translate(0, -115%);
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(17px);
	-webkit-backdrop-filter: blur(17px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;

const ButtonWrap = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const GithubWrap = styled.div`
	position: absolute;
	right: 24px;
	bottom: 24px;
	text-align: right;
	border: 1px solid black;
	padding: 4px 8px;
	border-radius: 8px;
`;

const GithubLink = styled.a`
	color: black;
	text-decoration: none;
`;
