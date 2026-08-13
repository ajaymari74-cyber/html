let salary = 15000;
let work_days = 26;
let per_day = salary/work_days;
let ten_day = per_day * 10;
let bonus = salary * (5 / 10);
let final_salary = bonus + ten_day;
let deduction_amount = ten_day - 500;
let with_bon_deduction = final_salary - 500; 

document.write("Total 26 days working salary: " + salary);
document.write("<br>Per day working salary is: " + per_day);
document.write("<br>Ten days working salary is: " + ten_day);
document.write("<br>Bonus amount is: " + bonus);
document.write("<br>Final salary amount is: " + final_salary);
document.write("<br>Deduction salary amount is: " + deduction_amount);
document.write("<br>Deduction with Bonus salary amount is: " + with_bon_deduction);
"<br>"
