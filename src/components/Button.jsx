import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
	border-radius: 20px;
	border: 2px solid #8c8581;
	background: #331930;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	color: #fff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	font-family: Jua;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
  padding: 20px 35px;
	white-space : nowrap;
	:hover{
		cursor: pointer;
	}
`;
