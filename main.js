// function task1(n){
//     if(n==1){
//         return 1;
//     }
//     return n + task1(n-1)
// }
// console.log(task1(12));

// function task2(n){
//     if(n==1){
//         return 1;
//     }
//     return n * task2(n-1)
// }
// console.log(task2(5));

//task3
//   function sumDigit(n)
// {
//     if (n < 10){
//         return n
//     }
//     else {
//         return n % 10 + sumDigit(Math.floor(n /= 10)) }
// }
// console.log(sumDigit(111));

// function task4(n){
//     if(n==1){
//         return 1;
//     }
//     return n * task4(n-2)
// }
// console.log(task4(9));

 //task 5
// function fibonacci(n){


//     if (n == 0 || n==1)
//        { return n}
//        if (n == 2)
//        { return 1}
    
        
//      {
    
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
       
    
//     }
//     console.log(fibonacci(4));
//task6
// function get(nam1) {
//     return function(nam2) {
//       return nam1 + nam2;
//     };
//   }
  
//   let number = get(10);
//   console.log(number(2));    
//   console.log(number(-8));   

//task7
// function get_mult(a, b) {
//     return function(c, d) {
//       return function(e, f) {
//         const sum1 = a * c * e;
//         const sum2 = b * d * f;
//         return sum1 + sum2;
//       };
//     };
//   }
  
//   console.log(get_mult(5, 2)(5, 1)(5, 3));    
//   console.log(get_mult(10, 2)(5, 0)(2, 3));   
//   console.log(get_mult(1, 2)(2, 3)(3, 4)); 
//task8
// function multiply(a, b) {
    
//     if (a == 0 || b == 0) {
//       return 0;
//     }

//     if (b > 0) {
//       return a + multiply(a, b - 1);  
      
//     } else {
     
//       return -multiply(a, -b);
//     }
//   }
  
//   console.log(multiply(10, 2));    // Output: 20
//   console.log(multiply(-51, -4));  // Output: 204
//   console.log(multiply(3, 9));     // Output: 27


