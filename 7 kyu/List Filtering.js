function filter_list(l) {
   arr = []
   l.forEach(item => {
      if (typeof (item) === 'number') {
         arr.push(item)
      }
   })
   return arr
}