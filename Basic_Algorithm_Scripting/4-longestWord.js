function findLongestWord(str) {
  var arr = str.split(' ');
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (longest < arr[i].length) {
      longest = arr[i].length;
    }
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
