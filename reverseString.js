function reverseString(str) {
  let revStr = str.split("").reverse().join("");
  return revStr;
}

reverseString("hello");