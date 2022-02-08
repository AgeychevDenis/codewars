// let array1 = [true, true, true, false,
//    true, true, true, true,
//    true, false, true, false,
//    true, false, false, true,
//    true, true, true, true,
//    false, false, true, true];

// countSheeps(array1)

// function countSheeps(arrayOfSheep) {
//    let n = 0
//    arrayOfSheep.forEach(element => {
//       if (element === true) {
//          n++
//       }
//    });
//    return n
// }
//========================================================================================================================================================

// function basicOp(operation, value1, value2) {
//    let result
//    switch (operation) {
//       case '+': result = value1 + value2; break;
//       case '-': result = value1 - value2; break;
//       case '/': result = value1 / value2; break;
//       case '*': result = value1 * value2; break;
//    }
//    return result
// }

// console.log(basicOp('*', 7, 2));

//========================================================================================================================================================


// function litres(time) {
//    let water = 0.5
//    let opi = time * water
//    let result = Math.round(opi - 0.5)

//    return result
// }

// console.log(litres(1.4));


//========================================================================================================================================================

// function repeatStr(n, s) {
//    return s.repeat(n)
// }

// console.log(repeatStr(6, 'sss '));

//========================================================================================================================================================


// function squareSum(numbers) {
//    let sum = 0
//    numbers.forEach(number => {
//       sum += (number * number)
//    })
//    return sum
// }

// console.log(squareSum([1, 2, 2]));

//========================================================================================================================================================

// function solution(str){
//    return str.split('').reverse().join('');
//  }

//========================================================================================================================================================

// function check(a, x) {
//    const e = a.includes(x)
//    return e
// }

// check(['e', 'as', 'rss', 'c'], 'as')

//========================================================================================================================================================

// let str = 'Hello my friend'

// console.log(str.endsWith('end'));

//========================================================================================================================================================

// function sum(numbers) {
//    let sum = 0
//    numbers.forEach(item => {
//       sum += item
//    })
//    return sum
// };

// console.log(sum([-2.398]));

//========================================================================================================================================================

// function invert(array) {
//    let result = []
//    array.forEach(item => {
//       result += item * -1
//    })
//    return result
// }

// console.log(invert([1, 3, 2, 31]));

//========================================================================================================================================================

// function filter_list(l) {
//    return l.filter(item => {
//       if (typeof item === 'number') {
//          return true
//       }
//    })
// }

//========================================================================================================================================================

// function getCount(str) {
//    let vowelsCount = 0;

//    let numStr = str.split('');

//    numStr.forEach(item => {
//       if (item === 'a' || item === 'e' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
//          vowelsCount++
//       }
//    })

//    return vowelsCount;
// }

// Или

// const getCount = str => str.replace(/[^aeiou]/g, '').length;

//========================================================================================================================================================

// function DNAtoRNA(dna) {
//    return dna.replace(/T/g, 'U')
// }

// console.log(DNAtoRNA('ATATATTAA'));

// const DNAtoRNA = dna => dna.replace(/T/g, 'U');

//========================================================================================================================================================

// function SeriesSum(n) {
//    for (var s = 0, i = 0; i < n; i++) {
//       s += 1 / (1 + i * 3)
//    }

//    return s.toFixed(2)
// }

// function SeriesSum(n, s = 0) {
//    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }

//========================================================================================================================================================

// function boolToWord(bool) {
//    return bool === true ? 'Yes' : 'No';
// }

// console.log(boolToWord('No'));

//========================================================================================================================================================

// function duplicateEncode(word){
//    let object = {}
//    let letter = word.toLowerCase().split('')
//    for (let i = 0; i < letter.length; i++) {
//      let x = letter[i]
//      if (object[x] === undefined) {
//        object[x] = 1
//      } else {
//        object[x] += 1
//      }
//    }
//    return letter.map(function(letter){
//      return object[letter] === 1 ? '(' : ')'
//    }).join('')
//  }

//========================================================================================================================================================

// function countBy(x, n) {
//    let z = []
//    let index = 1

//    while (z.length < n) {
//       z.push(x * index)
//       index++
//    }

//    return z
// }

//========================================================================================================================================================

// function booleanToString(b) {
//    return b === true ? "true" : "false"
// }

// console.log(booleanToString(false));

//========================================================================================================================================================

// function isIsogram(str) {
//    return new Set(str.toLowerCase()).size === str.length
// }

//========================================================================================================================================================

// function removeExclamationMarks(s) {
//    return s.replace(/[!]/gi, '')
// }

//========================================================================================================================================================

// function bmi(weight, height) {
//    let mass = weight / (height * height)

//     if (mass <= 18.5) {
//        return 'Underweight'
//     } else if  (mass <= 25) {
//        return 'Normal'
//     } else if  (mass <= 30) {
//        return 'Overweight'
//     } else {
//        return 'Obese'
//     }
//  }

//========================================================================================================================================================

// function feast(beast, dish) {
//    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
//       return true
//    } else {
//       return false
//    }
// }

//========================================================================================================================================================

// function smash(words) {
//    return words.join(' ')
// };

//========================================================================================================================================================

// function descendingOrder(n) {
//    return +n.toString().split('').sort((a, b) => {
//       return b - a;
//    }).join('');
// };

// console.log(descendingOrder(534565748));

// function descendingOrder(n) {
//    return +n.toString().split('').sort().reverse().join('');
//  }

//========================================================================================================================================================

function maps(x) {
   const arr = x.map(num => {
      return num + num
   })
   return arr
}

console.log(maps([4, 1, 1, 1, 4]));