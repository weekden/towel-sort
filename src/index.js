
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // Condition for returning an empty array
    if (!matrix || matrix.length === 0) return []
    // Condition for returning an not empty array. Method reduce with pahrametrs(acc item index)
    /*calllback function
    acc is accumulate for returning result
    item is iterable item
    index is index of iterable item 
    concat - create new array and past into it elements current array*/
    return matrix.reduce((acc, item, index) => {
		if ((index+1) % 2 !== 0) {
			acc = acc.concat(item)
		} else acc = acc.concat(item.reverse())
		return acc
	});
}
