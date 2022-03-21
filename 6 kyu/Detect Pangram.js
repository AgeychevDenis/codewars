function isPangram(string) {
   const allLetters = "abcdefghijklmnopqrstuvwxyz"
   let str = string.toLowerCase()

   return allLetters.split('').every(letter => str.includes(letter))
}