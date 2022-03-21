const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const accum = (str) => str
   .split('')
   .map((word, i) => capitalizeFirstLetter(Array(i + 2).join(word).toLowerCase()))
   .join('-');