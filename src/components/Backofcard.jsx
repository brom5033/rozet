import React from 'react';
import styled from '@emotion/styled';
import backgroundCard from '../assets/background_card.svg';
import PropTypes from 'prop-types';

export const Backofcard = (props) => {
	return <Image onClick={props.onClick} src={backgroundCard} alt="backofcard" />;
};

const Image = styled.img`
	width: 80px;
	height: 130px;
	box-shadow:
		0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
		0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		:hover{
			cursor: pointer;
		}
`;

Backofcard.propTypes = {
	onClick: PropTypes.func.isRequired,
};
