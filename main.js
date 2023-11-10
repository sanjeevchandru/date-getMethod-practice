document.write("Today date"+"<br>");
document.write("-----------------------------------"+"<br>");

var date=new Date();
document.write(date+"<br><br>");

document.write("This year :"+date.getFullYear()+"<br>");
document.write("Date of today :"+date.getDate()+"<br>");

var x=["January","February","March","April","May","June","July","August","september","October","November","December"]
// let b=date.getMonth();
document.write("This month :"+x[date.getMonth()]+"<br>");

document.write("This Hours :"+date.getHours()+"<br>");
document.write("This Minites :"+date.getMinutes()+"<br>");
document.write("This Seconds  :"+date.getSeconds()+"<br>");
document.write("This Milliseconds :"+date.getMilliseconds()+"<br>");
document.write("This Time :"+date.getTime()+"<br>");
document.write("Date to String :"+date.toDateString()+"<br>");
document.write("To Time String :"+date.toTimeString()+"<br>");
document.write("To locale string :"+date.toLocaleString()+"<br>");
document.write("Loacle time string :"+date.toLocaleTimeString()+"<br>");
document.write("Locale date string :"+date.toLocaleDateString()+"<br>");
