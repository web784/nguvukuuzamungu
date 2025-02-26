function funcClic() {
    // head...
    var x = document.getElementById("mypara");
    x.innerHTML = "Call This PHONE NO 0756302908"
}

/*--============ toggle menu ===========------*/
var navlinks = document.getElementById("navlinks");
function showmenu() {
    navlinks.style.right = "0";
}
function hidemenu() {
    navlinks.style.right = "-200px";
}