import React from 'react';

import { useRecoilValue } from 'recoil';

import { cardState } from '../stores/card';
import { cardData } from '../constants/cardData';
import { findCard } from '../utils/findCard';

export const Result = () => {
	const cardName = useRecoilValue(cardState);
  const card = findCard(cardData,cardName)[0]
	
	return <div>{card.name}</div>;
};
