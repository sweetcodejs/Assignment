function dateCalculation(){
    var date1 = new Date();
    var a = document.getElementById("date").value;
    var date2 = new Date(a);

    var timeDifference= date2 - date1;
    var result = timeDifference/(1000*60*60*24);

    var c = document.getElementById("display");
    c.innerHTML = result;
}