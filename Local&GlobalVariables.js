var a="hello"; // global variable
function test(){
    document.write(a +"<br>");
}
test();
document.write(a,"<br>"); // global variable can run inside or outside the function

function test2(){
    var b = "Namaste"; // local variable
    document.write(b +"<br>")
}
test2();
document.write(b +"<br>"); // it will not work because local variable only work inside the function