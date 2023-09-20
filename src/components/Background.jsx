import React from 'react';
import styled from '@emotion/styled';

export const Background = () => {
	return (
		<picture>
			<source srcSet="/rozet/images/background_rabbit.webp" type="image/webp" />
			<source srcSet="/rozet/images/background_rabbit.jpeg" type="image/jpeg" />
			<Image src="/rozet/images/background_rabbit.jpg" alt="background" />
		</picture>
	);
};

const Image = styled.img`
	height: 100%;
	width: 100%;
`;
