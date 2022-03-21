function getCount(str) {
   var vowelsCount = 0;

   let numStr = str.split('');

   numStr.forEach(item => {
      if (item === 'a' || item === 'e' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
         vowelsCount++
      }
   })

   return vowelsCount;
}