/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N. */
function outlier(arr) {
    let evens = []
    let odds = []
    arr.forEach(function(element) {
        if (element % 2 === 0) {
            evens.push(element)
        } else {
            odds.push(element)
        }
    })
    if (evens.length > odds.length) {
        return odds
    } else {
        return evens
    }
}
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))