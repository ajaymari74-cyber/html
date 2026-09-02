// for(let i = 1; i<=3; i++){
//     for(let j=1;j<=5;j++){
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }


// for(let i = 1; i<=2; i++){
//     for(let j=1;j<=5;j++){
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }


// for(let i = 1; i<=4; i++){                 // 1 1 1 1
//     for(let j=1;j<=4;j++){                 // 2 2 2 2
//         document.write(i + " ");           // 3 3 3 3
//     }                                      // 4 4 4 4
//     document.write("<br>");
// }


// for(let i = 1; i<=3; i++){                       // 1 2 3 
//     for(let j=1;j<=3;j++){                       // 1 2 3 
//         document.write(j + " ");                 // 1 2 3 
//     }
//     document.write("<br>");
// }


// for(let i = 1; i<=4; i++){                       // 1 2 3 
//     for(let j=1;j<=4;j++){                       // 1 2 3 
//                                       // 1 2 3 
//         if(j%2===0){
//             document.write("0" +"")
//         }else{
//             document.write("*" +"")
    
  
//     }
      
// }
// document.write("<br>");
// }


// for(let i = 1; i<=4; i++){ 
//     for(let j=1;j<=7;j++)
//         {   
//         document.write(j ++ + " ")    
//     }
//     document.write("<br>");       
// }
// document.write("<br>");       



// for(let i=1; i<=4; i++){
//     for(let j=1; j<=5; j++){
//     if((j==1 || j==5) || (i==2 &&j==3)){
//         document.write("j" + " ")
   
//     }
//     else{
//         document.write(" &nbsp; &nbsp; ")
//     }  

// }
// document.write("<br>");
// }


// for(let i=1; i<=4; i++){
//     for(let j=1;j<=4;j++){
//         if((j==1 || j==4)|| (i==3 && j==2)||(i==3 && j==3) || (i==1 && j==3) || (i==1 && j==2)){
//             document.write("*")
//         }
//         else{
//             document.write(" &nbsp; &nbsp; ")
//         }
//     }
//     document.write("<br>")
// }


// for (let i=1; i<=4; i++){
//     for(let j=1; j<=4; j++){
//         if(j<=i){
//             document.write(j + " ")
//         }
//         else{
//             document.write(" &nbsp; &nbsp; ")
//         }
//     }
//     document.write("<br>")
//     }


// for (let i=1; i<=4; i++){
//     let a=5
//     for(let j=1; j<=i; j++){
       
//             document.write(a + " ");
//             a=a+5
       
//     }
//     document.write("<br>")
   
//     }

// for (let i=1; i<=4; i++){
//     let a=1;
//     for(let j=1; j<=i; j++){
//         if(j %2===0){
//             document.write("@" + " ")
//         }
//         else{
//             document.write("#" + " ")
//         }
//     }
//     document.write("<br>")
// }

// for (let i=4; i>=1; i--){
//     for(let j=1; j<=i; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// for (let i=40; i>=10; i=i-10){
// // let k= 10;
//     for(let j=10; j<=i; j=j+10){
//         document.write(j + " ")
//         // k+=10
//     }
//     document.write("<br>")
// }

// for(let i =3; i<=9; i+=2){
//     for(let j=i; j<=9;j +=2){        //7th  program
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

for (let i=9; i>=3; i-=2){
    for(let j=3; j<=9;j+=2){
        document.write(j + " ")
    }
    document.write("<br>")
}