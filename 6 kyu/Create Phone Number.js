function createPhoneNumber(numbers) {
   return numbers.join('').replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2-$3$4')
}