/**
 * 같은 네임의 카드를 찾아준다
 * 
 * @param {Array} arr 
 * @param {String} name 
 * @returns {Array} 
 */
export const findCard = (arr, name) => {
	return arr.filter((card) => card.name === name)[0];
};
