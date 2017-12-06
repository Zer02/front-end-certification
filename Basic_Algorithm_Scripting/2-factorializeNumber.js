function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    for (var i = 1; num >= 1; num--) {
      i *= num;
    }
    return i;
  }
}

factorialize(5); // 5*4*3*2*1 = 120
