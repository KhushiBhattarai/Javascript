
        function sub(maths,science,nepali){
            var sum = maths+science+nepali;
            return sum;
        }

        var total = sub(45,89,65);
        percentage(total);

        function percentage(tt){
            var per = (tt/300)*100;
            document.write("The percentage is: "+per);
        }
