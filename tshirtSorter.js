// Write your solution below:
function shirtSorter(str) {
    let sArr = []
    let mArr = []
    let lArr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] ==='s') {
            sArr.push(str[i])
        } else if (str[i] ==='m') {
            mArr.push(str[i])
        } else if (str[i] === 'l') {
            lArr.push(str[i])
        }
    }
    return sArr.concat(mArr, lArr)
}


console.log(shirtSorter('smlm'))
console.log(shirtSorter('mls'))
console.log(shirtSorter('smllms'))