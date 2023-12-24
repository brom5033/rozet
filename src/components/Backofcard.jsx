import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const Backofcard = (props) => {
	return <Image onClick={props.onClick} src='/images/tarot-background2.jpg' alt="backofcard" layout />;
};

const Image = styled(motion.img)`
	width: 80px;
	height: 130px;
	box-shadow:
		0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
		0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		:hover{
			cursor: pointer;
			background-color: gray;
		}
`;

Backofcard.propTypes = {
	onClick: PropTypes.func.isRequired,
};
