let n=134560789;
let count=0

while(n>0){
    let rem= n%10;
    
    if(rem==0){
        count++
        
    }
     n=Math.floor(n/10)
}
 if(count>0){
        console.log(" Duck Number");
    }
    else{
        console.log("Not Duck Number");
        
    }