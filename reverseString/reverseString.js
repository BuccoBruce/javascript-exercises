const reverseString = function(input) {
    stringArray=input.split('')
    stringArray=stringArray.reverse()
    stringArray=stringArray.join('')
    return(stringArray)
}

module.exports = reverseString
