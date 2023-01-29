function deleteMe(){
    document.getElementById("my_result").value =" ";
}
function calCulate(newValue ){
    document.getElementById("my_result").value += newValue;
}
function reSult(){
    var a = document.getElementById("my_result").value;
    var b = eval(a);
    document.getElementById("my_result").value = b;
}
function squreRoot(){
    var m = document.getElementById("my_result").value;
    var n = Math.sqrt(m);
    document.getElementById("my_result").value = n;
}