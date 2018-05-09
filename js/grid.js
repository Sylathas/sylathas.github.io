// JavaScript Document
function openDiv() {
	document.getElementById("Traveldiv").style.height = "100vh";
	document.getElementById("Traveldiv").style.zIndex = "1";
	document.getElementById("Traveldiv").style.top = "0px";
	document.getElementById("Close").style.opacity = "1";
}

function closeDiv() {
	document.getElementById("Traveldiv").style.height = "100px";
	document.getElementById("Close").style.opacity = "0";
	document.getElementById("Traveldiv").style.top = "300px";
}

function zindex1(){
	document.getElementById("Traveldiv").style.zIndex = "0";
}

function openDiv2() {
	document.getElementById("Designdiv").style.height = "100vh";
	document.getElementById("Designdiv").style.zIndex = "1";
	document.getElementById("Designdiv").style.top = "0px";
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
	document.getElementById("Musicdiv").style.height = "100vh";
	document.getElementById("Musicdiv").style.zIndex = "1";
	document.getElementById("Musicdiv").style.top = "0px";
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
	document.getElementById("Filmdiv").style.height = "100vh";
	document.getElementById("Filmdiv").style.zIndex = "1";
	document.getElementById("Filmdiv").style.top = "0px";
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

function Link(){
	 location.href='index.html';
}