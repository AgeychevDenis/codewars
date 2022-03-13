'use string';
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

// function maps(x) {
//    const arr = x.map(num => {
//       return num + num
//    })
//    return arr
// }

// console.log(maps([4, 1, 1, 1, 4]));

// function maps(x) {
//    return x.map(n => n * 2);
// }

//========================================================================================================================================================

// function getSum(a, b) {
//    let count = 0;
//    if (a == b) return a;
//    if (a < b) {
//       for (; a <= b; a++) {
//          count += a;
//       }
//    } else if (a > b) {
//       for (; b <= a; b++) {
//          count += b;
//       }
//    }
//    return count;
// }



// const GetSum = (a, b) => {
//    let min = Math.min(a, b),
//       max = Math.max(a, b);
//    return (max - min + 1) * (min + max) / 2;
// }

// console.log(getSum(-375, -211));

//========================================================================================================================================================

// function cockroachSpeed(s) {
//    return Math.floor(s * 100000 / 3600)
// }

//=================================================================================================================

// function sumMix(x) {
//    let sum = 0
//    x.forEach(elem => {
//       sum += +elem
//    })
//    return sum
// }

//=================================================================================================================


// function updateLight(current) {
//    switch (current) {
//       case 'green':
//          return 'yellow';
//          break;
//       case 'yellow':
//          return 'red';
//          break;
//       case 'red':
//          return 'green';
//          break;
//    }
// }

// function updateLight(current) {
//    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }

//=================================================================================================================

// function removeEveryOther(arr) {
//    return arr.filter((_, idx) => idx % 2 === 0)
// }

//========================================================================================================================================================

// function reverseWords(str) {
//    let newStr = '';
//    str.split(' ').forEach(word => {
//       newStr += word.split('').reverse().join('') + ' ';
//    });
//    return newStr.trimEnd()
// }

//========================================================================================================================================================

// function countPositivesSumNegatives(input) {
//    if (!input || !input.length) return []
//    let numbers = 0
//    let minusNum = 0
//    input.forEach(num => {
//       if (num > 0) {
//          numbers++
//       } else {
//          minusNum += num
//       }
//    })
//    return [numbers, minusNum]
// }
// console.log(countPositivesSumNegatives([1221, -4, -4 - 5, null]));

//========================================================================================================================================================

// function simpleMultiplication(number) {
//    if (number % 2 === 0) {
//       return number * 8
//    } else {
//       return number * 9
//    }
// }

// console.log(simpleMultiplication(4));

//========================================================================================================================================================

// function towerBuilder(nFloors) {
//    let res = []
//    for (i = 0; i < nFloors; i++) {
//       res.push(" ".repeat((nFloors - i) - 1) + "*".repeat((i * 2) + 1) + " ".repeat((nFloors - i) - 1));
//    }
//    return res
// }

//========================================================================================================================================================

// function openOrSenior(data) {
//    let mass = []
//    data.forEach(elem => {
//       if (elem[0] >= 55 && elem[1] > 7) {
//          mass.push('Senior')
//       } else {
//          mass.push('Open')
//       }
//    })
//    return mass
// }

// console.log(openOrSenior([[19, 12], [69, 4], [30, 13], [88, 7], [31, 14], [16, 1], [87, -1]]));


// function openOrSenior(data){
//    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//  }

//========================================================================================================================================================

// function solution(str, ending) {
//    return str.endsWith(ending)
// }

//========================================================================================================================================================

// function squareSum(numbers) {
//    let sum = 0
//    numbers.forEach(num => {
//       sum += num * num
//    })
//    return sum
// }

//========================================================================================================================================================

// function filter_list(l) {
//    arr = []
//    l.forEach(item => {
//       if (typeof (item) === 'number') {
//          arr.push(item)
//       }
//    })
//    return arr
// }

// function filter_list(l) {
//    return l.filter(v => typeof v == "number")
// }

//========================================================================================================================================================

function isPangram(string) {
   const allLetters = "abcdefghijklmnopqrstuvwxyz"
   let str = string.toLowerCase()

   return allLetters.split('').every(letter => str.includes(letter))

}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));