// JavaScript Document
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

function openDiv() {
	document.getElementById("Traveldiv").style.height = "400px";
	document.getElementById("Traveldiv").style.zIndex = "1";
	document.getElementById("Close").style.opacity = "1";
}

function closeDiv() {
	document.getElementById("Traveldiv").style.height = "100px";
	document.getElementById("Close").style.opacity = "0";
}

function zindex1(){
	document.getElementById("Traveldiv").style.zIndex = "0";
}

function openDiv2() {
	document.getElementById("Designdiv").style.height = "400px";
	document.getElementById("Designdiv").style.zIndex = "1";
	document.getElementById("Designdiv").style.top = "300px";
	document.getElementById("Close1").style.opacity = "1";
}

function closeDiv2() {
	document.getElementById("Designdiv").style.height = "100px";
	document.getElementById("Designdiv").style.top = "400px";
	document.getElementById("Close1").style.opacity = "0";
}

function zindex2(){
	document.getElementById("Designdiv").style.zIndex = "0";
}

function openDiv3() {
	document.getElementById("Musicdiv").style.height = "400px";
	document.getElementById("Musicdiv").style.zIndex = "1";
	document.getElementById("Musicdiv").style.top = "300px";
	document.getElementById("Close2").style.opacity = "1";
}

function closeDiv3() {
	document.getElementById("Musicdiv").style.height = "100px";
	document.getElementById("Musicdiv").style.top = "500px";
	document.getElementById("Close2").style.opacity = "0";
}

function zindex3(){
	document.getElementById("Musicdiv").style.zIndex = "0";
}

function openDiv4() {
	document.getElementById("Filmdiv").style.height = "400px";
	document.getElementById("Filmdiv").style.zIndex = "1";
	document.getElementById("Filmdiv").style.top = "300px";
	document.getElementById("Close3").style.opacity = "1";
}

function closeDiv4() {
	document.getElementById("Filmdiv").style.height = "100px";
	document.getElementById("Filmdiv").style.top = "600px";
	document.getElementById("Close3").style.opacity = "0";
}

function zindex4(){
	document.getElementById("Filmdiv").style.zIndex = "0";
}
