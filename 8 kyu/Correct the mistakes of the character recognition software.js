function correct(string) {
   const corrections = {
      "5": "S",
      "0": "O",
      "1": "I",
   };
   return string.split('').map((char) => corrections.hasOwnProperty(char) ? corrections[char] : char).join("")
}