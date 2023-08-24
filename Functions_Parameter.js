function sum(a,b){
            document.write(a+b,"<br>");
        }
        sum(); // it dispay NaN (in number) & undeined (in string)
        sum(10,30);

        function name(fname= "Hari",lname = "Bol"){
            document.write("My name is: "+fname ," " +lname +"<br>");
        }
        name(); // in calling function if there is noo argunment then default value will display
       name("Khushi","Bhattarai"); // it will override the default value