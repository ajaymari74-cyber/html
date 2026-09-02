for(let z = 2; z <= 20; z++){
    let num = z;
    let count = 0;

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            count += 1;
        }
    }

    if(count == 0){
        console.log(num + " is prime number");
    }
}