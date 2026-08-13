let maths = Number(prompt("Enter Your Maths Score:"));
let phys = Number(prompt("Enter Your Physics Score:"));
let tam = Number(prompt("Enter Your Tamil Score:"));
let chem = Number(prompt("Enter Your Chemistry Score:"));
let eng = Number(prompt("Enter Your English Score:"));
let cs = Number(prompt("Enter Your Computer Science Score:"));

let phy_chem = (phys + chem) / 2;
let cutoff = (maths + phy_chem);

// Assuming each subject is out of 100, the total maximum is 600
let totalMarks = maths + phys + tam + chem + eng + cs;
let per = (totalMarks / 600) * 100;

document.write("Your Cutoff Mark is : " + cutoff);
document.write("<br> Your over all percentage is : " + per.toFixed(2) + "%");
