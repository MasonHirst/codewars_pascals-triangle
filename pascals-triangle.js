function pascal(depth) {
   let triangle = []
   for (i = 0; i < depth; i++) {
      let row = []
      for (j = 0; j <= i; j++) {
         if (j === 0 || j === i) {
            row.push(1)
         } else {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
         }
      }
      triangle.push(row)
   }
   return triangle
}

console.log(pascal(5))

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]