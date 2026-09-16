let num =1441;
let originalnum = num;
let rev =0

while(num >0){

   let rem = num %10;
   rev = rev  *10+ rem;
    num=parseInt(num/10);
}
if(originalnum == rev){
    console.log("is a Palindrom");
    
}
else{
    console.log("Not a Palindrom");
    
}

console.log(rev);
