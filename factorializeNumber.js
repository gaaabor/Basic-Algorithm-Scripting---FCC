function factorialize(num) {
  let count = num;
  
  if (num !== 0) {
    for (i = 1; i < count; i++) {
      num = num * i;
  }
    
  } else {
      return 1;
  }
  return num;
}

factorialize(5);