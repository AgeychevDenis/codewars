function expandedForm(num) {
   let str = String(num).split('');

   for (let i = 0; i < str.length; i++) {
      for (let j = str.length - i; j > 1; j--) {
         if (str[i] == '0') {
            i++;
         } else {
            str[i] += '0';
         }
      }
   }

   return str.filter(item => item != '0').join(' + ');
}