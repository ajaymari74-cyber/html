// Prime Numbers find given prime numbers in 1 to 20 
for(let z =1; z<=20; z++){
    let num = z;
    let count = 0;
    for(let i = 0; i<=z ; i++){
        if(num % 2 ==0){
            count += 1;
        }
        
    }
    if(count == 0){
        console.log(num + " is prime number ");
        
    }
}