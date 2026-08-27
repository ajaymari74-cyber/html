//Amstrong Number
let sum =0;
count =0;
for(z = 100; z<=1000; z++){
let num =z;
let val=num;
let Arm =0;

while(num>0){
    let rem =num %10;
    // console.log(rem);
    Arm= Arm + rem**3
    num =parseInt(num /10)
   
   


}
if(val == Arm){
     sum = sum + Arm
      count +=1;
    console.log("this is Armstrong" + Arm);
    
}

}
console.log(sum);
console.log(count);


