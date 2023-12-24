import React from 'react';
import styled from '@emotion/styled';

// components
import { Logo } from '@components/Logo';

export const Detail = () => {
	return (
		<MainContainer>
				<Logo />
		</MainContainer>
	);
};

const MainContainer = styled.div`
	background-color: black;
	min-height: 100vh;
	width: 100%;
`;
