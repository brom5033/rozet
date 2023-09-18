export const findCard = (arr, name) => {
	return arr.filter((card) => card.name === name)[0];
};
