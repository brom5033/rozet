import React from 'react';
import styled from '@emotion/styled';

export const Logo = () => {
	return (
		<picture>
			<source srcSet="/rozet/images/logo.webp" type="image/webp" />
			<source srcSet="/rozet/images/logo.png" type="image/png" />
			<Image src="/rozet/images/logo.png" alt="rozet logo" />
		</picture>
	);
};

const Image = styled.img`
	width: 230px;
	height: auto;
	:hover {
		cursor: pointer;
	}
`;
