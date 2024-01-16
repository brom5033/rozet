import styled from '@emotion/styled';

export const BackgroundBlur = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;
	background-image: url('/rozet/images/background-dark.jpg');
	background-color: gray;
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	@media screen and (max-width: 767px) {
		height: auto;
	}
`;
