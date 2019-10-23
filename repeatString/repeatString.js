const repeatString = function(word, iterations) {
    let x = 0
    let stringInput = ''
    while (x < iterations) {
        stringInput += word
        x++
    }
    if (iterations < 0) {
        return 'ERROR'
    } else {
        return stringInput
    }
}

module.exports = repeatString
