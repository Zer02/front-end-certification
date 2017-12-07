function palindrome(str) {
  str = str.toLowerCase();
  var newstr = str.replace(/[^a-z0-9+]+/gi, '');
  var reversed = newstr.split('').reverse().join('');

  if (newstr === reversed) {
    return true;
  } else {
    return false;
  }
}

palindrome('A man, a plan, a canal. Panama');
