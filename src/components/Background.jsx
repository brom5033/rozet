import React from 'react';
import styled from '@emotion/styled';

export const Background = () => {
	return (
			<Image src="/rozet/images/background-dark.jpg" alt="background" />
	);
};

const Image = styled.img`
	height: 100%;
	width: 100%;
	opacity: 0.9;
`;
