// let sum=0;
for(let i=15;i<=30;i++){
    let n=i;
    let n1=n;
    let sum=0;
    while(n>0){
        let rem =n%10;
         sum=sum+rem;
         n=Math.floor(n/10)
    }
    if(n1%sum==0){
        console.log("Its a Harshad number:"+n1);
        
    }
   
}