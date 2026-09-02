// let n=[1,2,3,4,5,6,7,8,9]

// n.forEach(i=>{
//     if(i%2==0){
//         console.log("Even Numbers"+i);
//     }
// }    
// );


// n.forEach(prime => {
//     if(prime > 1) {
//         let count = 0;

//         for(let i = 1; i <= prime; i++) {
//             if(prime % i == 0) {
//                 count++;
//             }
//         }

//         if(count == 2) {
//             console.log("primeNumbers is: " + prime);
//         }
//     }
// });

//odd and even
// let b = n.filter(even => even % 2 == 0);

// console.log("even Nub=mbers ",b);
// let b1 = n.filter(even => even % 2  !== 0);
// console.log("odd numbers ",b1);

//scores above 80 only print in array using
// let scores=[75,95,80,90,60,55,31,22,25]
// let above80 = scores.filter( abegi=> abegi>80 );
//  console.log("scores above egight plus",above80);
// //above 30 and below 60
//  let abovesixgtthirty = scores.filter(gi =>gi <60 && gi>30  );
//  console.log("above 30 and below 60",abovesixgtthirty);

//  let belowsixty = scores.filter(blsix =>blsix <60).map(blsix=>blsix +10)
//  console.log("belowsity mark add the bonus mark is 10",belowsixty);

//  let belowaddtenty = belowsixty.filter(blsix=>blsix<35)
//  console.log("below 35 on added ten mark after",belowaddtenty);
 
 

let scores=[75,95,80,90,60,55,31,22,25]
let above80 = scores.filter( abegi=> abegi>80 );
let sumabov80 = above80.reduce( (sum,i)=>sum + i,0)
let count = above80.reduce( (coun,i)=>coun+ 1,0)
let max = above80.reduce ((a,b)=> a>b ? a: b)
let min = above80.reduce ((a,b)=> a<b ? a: b)
console.log("max mark is",max);
console.log("min mark is",min);




//  console.log("scores above egight plus",above80);
//  console.log(sumabov80);
//  console.log(count);
 
 
 
 
