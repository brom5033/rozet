import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CardShuffle = () => {
	return (
		<div style={{ height: '100vh', backgroundColor:'white' }}>
			<AnimatedImage src="/images/tarot-background2.jpg" alt="backofcard" />
		</div>
	);
};

const AnimatedImage = styled(motion.img)`
	width: 120px;
	height: 195px;
`;
