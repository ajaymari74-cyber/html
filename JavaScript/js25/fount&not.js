let num = 12346656890
let count =0;

while(num>0){
    let rem = num %10;
    if(rem==6){
    count ++;
    }
    num = parseInt( num /10);
   
}
 if( count>0){
    console.log(" Found");
 }
    
else{
    console.log(" NOt found");
    
}
console.log(count);


