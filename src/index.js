module.exports = function reverse (n) {
    resalt= n.toString().split('').reverse().join('');
    return parseInt(resalt);
}
