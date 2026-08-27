let num =18;
let originalnum = num;
let sum =0

while(num >0){

    let rem = num %10;
    sum = sum + rem;
    num=parseInt(num/10);
    niven =  sum / num;


}
if(originalnum == niven){
    console.log("is a Niven Number");
    
}
else{
    console.log("Not a Niven Number");
    
}

console.log(sum);
