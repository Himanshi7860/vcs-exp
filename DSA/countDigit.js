
function countDigits(num) { //1234
    let count = 0 ;          // count = 4
     
    while(num > 0){           // num = 0 > 0 
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

console.log(countDigit(1234));