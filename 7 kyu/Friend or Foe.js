function friend(friends) {
   const arr = []
   friends.forEach(name => {
      if (name.length === 4 && typeof (name) === 'string') {
         arr.push(name)
      }
   })
   return arr
}