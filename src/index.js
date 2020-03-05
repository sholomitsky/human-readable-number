module.exports = function toReadable (num) {  
    let obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }
    function twoDigits (n) {
        if (obj[n]) {
            return obj[n];
        } else if (n < 100) {
            let first = n.toString().charAt(0) + '0';
            let second = n.toString().charAt(1)
            let res = obj[first] + ' ' + obj[second];
            return res;
        } 
    }
    if (num < 100) {
    return twoDigits(num);
    }
    let first = num.toString().charAt(0);
    let result = obj[first] + ' ' + 'hundred';
    if (num % 100 === 0) {
        return result;
    } else {
        let second = twoDigits(parseInt(num.toString().slice(1)));
        result += ' ' + second;
        return result;
    }
}
