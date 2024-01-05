import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
// components
import { MainContainer } from '../MainContainer';
import { Box } from '../Box';

export const ShuffleDetail = () => {
	const [showDescription, setShowDescription] = useState(false);

	return (
		<MainContainer>
			<Item>
				<Box>
					<TextWrap>
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.3 }}
						>
							카드 섞기를 충분히 해보셨나요?
						</motion.h1>
						<p>
							여기에서는 설명을 위한 페이지이기 때문에 카드를 선택해도
							<TextColor> 결과화면으로 가지 않아요.</TextColor> <br /> 결과를 보고 싶다면 설명을 다 보신
							후에
							<TextColor> 직접 운세를 보셔야해요.</TextColor>
						</p>
						<p>
							더 자세히 알고싶다면 밑에 버튼을 <TextColor>클릭</TextColor>해보세요!
						</p>
					</TextWrap>
					<ButtonWrap>
						<Button onClick={() => setShowDescription(!showDescription)}>
							{showDescription ? 'Close' : 'Click me!'}
						</Button>
						<AnimatePresence>
							{showDescription && (
								<ButtonDetail
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{ duration: 0.5 }}
								>
									<H3>셔플을 하는 이유</H3>
									<p>
										타로 카드를 셔플하는 것은 타로 읽기 과정에서 매우 중요한 단계에요. 셔플은 카드가
										무작위 순서로 섞이게 하여 각 읽기가 독특하고 개인적인 메시지를 잘 전달 할 수
										있게 해줘요. 마음 가는만큼 섞어보고 카드를 골라보세요.
									</p>
									<H3>셔플의 중요성</H3>
									<p>
										셔플은 당신의 에너지와 질문을 카드에 통합하는 과정이에요. 잘 섞인 카드는 더
										정확하고 의미 있는 메시지를 전달하는 데 도움을 줘요. 셔플은 읽기 전에 마음을
										가라앉히고 집중하는 데 도움이 되요.
									</p>
									<p>
										타로 카드 셔플이 끝난 후 카드를 고를 땐 질문을 생각하며, 신중하게 골라야 해요.
										이 타로 카드 계기로 많은 사람들이 타로카드에 재미를 느꼈으면 좋겠어요.
									</p>
								</ButtonDetail>
							)}
						</AnimatePresence>
					</ButtonWrap>
				</Box>
			</Item>
		</MainContainer>
	);
};

const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: jua;
	color: #f4f0f0;
	text-align: center;
`;

const Button = styled.button`
	font-family: jua;
	background-color: #fcdef8;
	width: 20%;
	border-radius: 15%;
`;

const ButtonWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	flex-direction: column;
`;

const Item = styled.div`
	padding: 100px;
	background-color: #000;
`;

const TextColor = styled.span`
	color: #d4beb0;
`;

const ButtonDetail = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: 800px;
	color: #cfcbcb;
	margin: auto;
	text-align: center;
	padding: 0 20px;
`;

const H3 = styled.h3`
	color: #d4beb0;
`;
