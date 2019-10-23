const sumAll = function(beginning, end) {
    var sum = 0;
    if (beginning < 0 || typeof(beginning) != "number" || end < 0 || typeof(end) != "number") {
        return("ERROR")
    } else {
        if (beginning > end) {
            //console.log('beginning is larger, reverse looping')
            for (i = beginning; i >= end; i--) {
                sum = sum + i;
            //console.log("sum is: " + sum);
            }
        } else {
            //console.log('end is larger, looping normally')
            for (i = beginning; i <= end; i++) {
                sum = sum + i;
                //console.log("sum is: " + sum);
            }
        }     
        return(sum);
    }
}



module.exports = sumAll
