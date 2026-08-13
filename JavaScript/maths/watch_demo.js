// 1. Fixed capitalization and added prompt()
let w = Number(prompt("Please enter the watch price:"));
let q = Number(prompt("Please enter the quantity:"));

// 2. Calculate the base total
let tot = (w * q);

// 3. Calculate 5% discount
let dis = tot * (5 / 100);

// 4. Calculate Final Without GST (Total minus Discount)
let fin_wo_gst = tot - dis;

// 5. Calculate 18% GST based on the discounted price
let gst = fin_wo_gst * (18 / 100);

// 6. Calculate Final With GST (Discounted price plus GST)
let fin_w_gst = fin_wo_gst + gst;

// 7. Output the correct variables to the screen
document.write("<br><br>A watch price is: " + w);
document.write("<br>Total watch price is: " + tot);
document.write("<br>GST amount is: " + gst); // Fixed: changed from +tot to +gst
document.write("<br>Discount amount is: " + dis);
document.write("<br>Final amount with out GST: " + fin_wo_gst);
document.write("<br>Final amount with GST: " + fin_w_gst);
