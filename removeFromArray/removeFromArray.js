const removeFromArray = function() {
    var array = arguments[0];                       //first argument will always be the array
    for (var i = 1; i < arguments.length; i++) {    //iterate from the first index onward, excludes the array
        if (array.includes(arguments[i])) {
            index = array.indexOf(arguments[i]);
            array.splice(index, 1);                 //remove only the value of the argument and clear any empty space
        } else {
            array = array;
        }
    }
    return(array);
}

module.exports = removeFromArray
