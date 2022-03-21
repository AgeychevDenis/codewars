function duplicateEncode(word) {
   let object = {}
   let letter = word.toLowerCase().split('')
   for (let i = 0; i < letter.length; i++) {
      let x = letter[i]
      if (object[x] === undefined) {
         object[x] = 1
      } else {
         object[x] += 1
      }
   }
   return letter.map(function (letter) {
      return object[letter] === 1 ? '(' : ')'
   }).join('')
}