function abbrevName(name) {
   return name.toUpperCase().split(' ').map((word) => word[0]).join('.')
}