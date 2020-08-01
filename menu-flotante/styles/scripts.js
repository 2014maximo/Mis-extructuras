function crecer() {
    var div = document.getElementById("crece");
    div.style.height = "200px";
    div.style.width = "200px";
    var menus = document.getElementById("decrece");
    menus.style.display = 'block';

}

function decrecer() {
    var div = document.getElementById("crece");
    div.style.height = "50px";
    div.style.width = "50px";
    var menus = document.getElementById("decrece");
    menus.style.display = 'none';
}
function aumentar() {
    var div = document.getElementById("crece");
    div.style.height = "300px";
    div.style.width = "500px";
}