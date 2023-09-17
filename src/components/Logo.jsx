import React from 'react';
import styled from '@emotion/styled';

export const Logo = () => {
	return <Image src="/rozet/images/logo.png" alt="rozet logo" />;
};

const Image = styled.img`
	width: 230px;
	height: 60px;
	:hover{
		cursor: pointer;
	}
`;
