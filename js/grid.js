// JavaScript Document

/*Spinner*/

$(window).load(function(){
    $("#Cover").fadeOut(500);
    
});

/*Menu*/

function openDiv() {
	var x = document.getElementsByClassName("Europe");
	var y = document.getElementsByClassName("World");
	var i;
	document.getElementById("Traveldiv").style.height = "100vh";
	document.getElementById("Traveldiv").style.zIndex = "1";
	document.getElementById("Traveldiv").style.top = "0px";
	document.getElementById("Close").style.opacity = "1";
	for (i = 0; i < x.length; i++) {
    	x[i].style.opacity = "0";
		x[i].style.zIndex = "0";
	}
	for (i = 0; i < y.length; i++) {
    	y[i].style.opacity = "0";
		y[i].style.zIndex = "0";
	}
}

function closeDiv() {
	var x = document.getElementsByClassName("Europe");
	var y = document.getElementsByClassName("World");
	var i;
	document.getElementById("Traveldiv").style.height = "100px";
	document.getElementById("Close").style.opacity = "0";
	document.getElementById("Traveldiv").style.top = "300px";
	document.getElementById("Travelp").style.fontSize = "60px";
	document.getElementById("World").style.opacity = "0";
	document.getElementById("Europe").style.opacity = "0";
	document.getElementById("World").style.zIndex = "0";
	document.getElementById("Europe").style.zIndex = "0";
	for (i = 0; i < x.length; i++) {
    	x[i].style.opacity = "0";
		x[i].style.zIndex = "0";
	}
	for (i = 0; i < y.length; i++) {
    	y[i].style.opacity = "0";
		y[i].style.zIndex = "0";
	}
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
	document.getElementById("Designp").style.fontSize = "60px";
	document.getElementById("University").style.opacity = "0";
	document.getElementById("Personal").style.opacity = "0";
	document.getElementById("University").style.zIndex = "0";
	document.getElementById("Personal").style.zIndex = "0";
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

/*Travel*/

function Image1(){
	document.getElementById("Europe").style.opacity = "1";
	document.getElementById("Europe").style.zIndex = "1";
}

function Image2(){
	document.getElementById("World").style.opacity = "1";
	document.getElementById("World").style.zIndex = "1";
}

/*Europa*/

function ViaggiE(){
	var x = document.getElementsByClassName("Europe");
	var i;
	document.getElementById("World").style.opacity = "0";
	document.getElementById("Europe").style.opacity = "0";
	for (i = 0; i < x.length; i++) {
    	x[i].style.opacity = "1";
		x[i].style.zIndex = "1";
	}
}

function ViaggiW(){
	var x = document.getElementsByClassName("World");
	var i;
	document.getElementById("World").style.opacity = "0";
	document.getElementById("Europe").style.opacity = "0";
	for (i = 0; i < x.length; i++) {
    	x[i].style.opacity = "1";
		x[i].style.zIndex = "1";
	}
}

function Back(){
	var x = document.getElementsByClassName("Europe");
	var y = document.getElementsByClassName("World");
	var i;
	for (i = 0; i < x.length; i++) {
    	x[i].style.opacity = "0";
		x[i].style.zIndex = "0";
	}
	for (i = 0; i < y.length; i++) {
    	y[i].style.opacity = "0";
		y[i].style.zIndex = "0";
	}
	document.getElementById("World").style.opacity = "1";
	document.getElementById("Europe").style.opacity = "1";
	
}

/*Work*/

function Image3(){
	document.getElementById("University").style.opacity = "1";
	document.getElementById("University").style.zIndex = "1";
}

function Image4(){
	document.getElementById("Personal").style.opacity = "1";
	document.getElementById("Personal").style.zIndex = "1";
}