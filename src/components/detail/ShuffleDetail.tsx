import React from 'react';
import styled from '@emotion/styled';

export const ShuffleDetail = () => {
	return (
		<Container>
			카드 섞기를 충분히 해보셨나요? 여기에서는 설명을 위한 페이지이기 때문에 카드를 선택해도 결과화면으로 가지
			않아요! 결과를 보고 싶다면 설명을 다 보신 후에 직접 운세를 보셔야해요!
		</Container>
	);
};

const Container = styled.div`
height: 100vh;
background-color: black;
color: white;
`