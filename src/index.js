function reverse(n) {
  const reversedStr = Math.abs(n).toString().split('').reverse().join('');
  const reversedNum = parseInt(reversedStr, 10) || 0;
  return reversedNum;
}

module.exports = reverse;
