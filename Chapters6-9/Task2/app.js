document.write("<h3> Q#2. What will be the output in variables a, b & result after execution of the following script:</h3>");
document.write("<br> ")

var a = 2, b = 1 , temp = 0 ,tempb =0 , tempc = 0;

temp = --a;

document.write(" <br> --a is: ",temp);
temp = 0;
temp = --a - --b;

document.write("<br> --a - --b is: " + temp);
temp = 0;
temp = (--a) - (--b) + (++b);

document.write("<br> --a - --b + ++b is: " + temp );
temp = 0;
temp = --a - --b + ++b + b--;
document.write("<br> Resultis " + temp);
