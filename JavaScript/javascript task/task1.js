function fun() {
    
    let a = Number(document.getElementById("i1").value);
    let b = Number(document.getElementById("i2").value);

    let c = a + b;
    document.write("first number:"+a);
    document.write("<br>second number:"+b);

    document.write(c);
}