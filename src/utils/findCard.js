export const findCard = (arr, name) => {
	const cardResult = arr.filter((card) => card.name === name);
	return cardResult;
};
