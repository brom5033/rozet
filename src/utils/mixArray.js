/**
 * 배열을 랜덤하게 섞어준다
 *
 * @param {Array} arr
 * @returns {Array}
 */
export const mixArray = (arr) => {
	return arr.sort(() => Math.random() - 0.5);
};
