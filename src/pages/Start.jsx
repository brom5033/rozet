import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { motion } from "framer-motion"


export const Start = () => {
	const navigate = useNavigate();
	const goToRandom = () => {
		navigate("/randomcard")
	}

	return (
		<>
			<BackgroundWrap>
				<Background />
			</BackgroundWrap>
			<Right>
				<LogoWrap>
					<Logo />
				</LogoWrap>
				<ButtonWrap > 
					<Button     whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} onClick={goToRandom}>오늘의운세 확인하기</Button>
					
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
	background-color: #fff;
	border-radius: 15px 0px 0px 15px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const LogoWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 24px;
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

`;

const GithubLink = styled.a`
	color: black;
	text-decoration: none;
`;

