// let count=0;
// let sum =0;
// let i = 0;

// for(let i =1 ; i<=10;i++){
//     if(i%2==0){

//       count++;
//       sum +=i;
//     }
// console.log(" Even Numbers "+i);
// }

// console.log("total count "+count);
// console.log(" Sum of  Total Even Numbers "+sum);



// for(let i =100 ; i<=200;i++){
//     if(i % 9==0){
//     console.log(+i);
     
//     }

// }

//Perfect Number
// let num =6;
// let sum=0
// for(i=1; i<num ;i++){
//   if( num % i==0){
//   console.log("6 divisable numbers:"+i);
//    sum +=i;    
//   }

// else if(num==sum){
//     console.log("perfect Number" +sum);
    

// }
// else{
//     console.log("not perfect nUmber");
    
// }
// }

//prime or not prime

// let num =7;
// let sum=0;
// for(let i =1; num > i; i++){
//     if(num % i ==0){
//         sum ++;
//     }
        
// } 
// if(sum == 0){
        
//           console.log("is Not Prime");
//     }
//     else{
      

// console.log("is Prime");
//     }


//composite Number
// let num =7;
// let sum=0;
// for(let i =1; num > i; i++){
//     if(num % i ==0){
//         sum ++;
//     }
        
// } 
// if(sum == 0){
        
//           console.log("is composite");
//     }
//     else{
      
// console.log("is Not Composite");
//     }


// let num = 12;
// let sum = 0;
// let i =0;

// for(let i =1; i<num; i++){
//     if(num % 12 ==0 ){
//          sum +=i;
//     }
// }
// if(sum>num){
//     console.log("Abounted Number");
    
// }
// else{
//     console.log("not Abounted Number");
    
// }

//while

// 


// let num =1463;
// let sum =0;

// while(num>0){
//     let rem =num %10;
//     // console.log(rem);
//     num =parseInt(num /10)
//   sum = sum+ rem

// }
// console.log(sum);



//Amstrong Number
// let num =153;
// let val=num;
// let Arm =0;

// while(num>0){
//     let rem =num %10;
//     // console.log(rem);
//     Arm= Arm + rem**3
//     num =parseInt(num /10)


// }
// if(val == Arm){
//     console.log("this is Armstrong");
    
// }
// else{
//     console.log("Not Armstrong" +num +"your value is:"+Arm);
    
// }

  
let num = 49;
let originalNum = num;
let sum = 0;
let pro = 1;
let spy = 0;

while (num > 0) {
    let rem = num % 10;
    num = parseInt(num / 10);
    sum = sum + rem;
    pro = pro * rem;
}

spy = sum + pro;

console.log(sum);

if (spy == originalNum) {
    console.log("this is spy number");
} else {
    console.log("not a spy number");
}

