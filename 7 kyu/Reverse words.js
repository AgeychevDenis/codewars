function reverseWords(str) {
   let newStr = '';
   str.split(' ').forEach(word => {
      newStr += word.split('').reverse().join('') + ' ';
   });
   return newStr.trimEnd()
}