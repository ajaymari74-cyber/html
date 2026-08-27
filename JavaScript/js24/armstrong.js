//Amstrong Number

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
    console.log("this is Armstrong" + Arm);
    
}

}
