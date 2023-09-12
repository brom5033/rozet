import React from 'react';
import styled from '@emotion/styled';
import backgroundCard from '../assets/background_card.svg'

export const Backofcard = () => {
	return <Image src={backgroundCard} alt="backofcard" />;
};

const Image = styled.img`
  width: 80px;
height: 130px;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`