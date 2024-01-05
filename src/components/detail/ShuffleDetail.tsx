import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

export const ShuffleDetail = () => {
	const [showDescription, setShowDescription] = useState(false);

	return (
		<Container>
			<TextWrap>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					카드 섞기를 충분히 해보셨나요?
				</motion.h1>
				<p>
					여기에서는 설명을 위한 페이지이기 때문에 카드를 선택해도 결과화면으로 가지 않아요. 결과를 보고
					싶다면 설명을 다 보신 후에 직접 운세를 보셔야해요.
				</p>
				<p>카드셔플에 대해 더 자세히 알고싶다면 밑에 버튼을 클릭해보세요!</p>
			</TextWrap>
			<ButtonWrap>
				<Button onClick={() => setShowDescription(!showDescription)}>
					{showDescription ? 'Close' : 'Click me!'}
				</Button>
				<AnimatePresence>
					{showDescription && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}
						>
							<p>여기에 타로 카드 설명을 넣으세요.</p>
						</motion.div>
					)}
				</AnimatePresence>
			</ButtonWrap>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	background-color: black;
	color: white;
`;

const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: jua;
`;

const Button = styled.button`
	font-family: jua;
	background-color: #fcdef8;
`;

const ButtonWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	flex-direction: column;
`;
