// JavaScript Document

/*Spinner*/

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
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("PopPunk").style.zIndex = "0";
	document.getElementById("Pop").style.zIndex = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Acoustic").style.zIndex = "0";
	document.getElementById("Metal").style.zIndex = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Metalcore").style.zIndex = "0";
	document.getElementById("Rock").style.zIndex = "0";
	document.getElementById("Rap").style.opacity = "0";
	document.getElementById("Rap").style.zIndex = "0";
	var a = document.getElementsByClassName("PopPunk");
	var b = document.getElementsByClassName("Pop");
	var c = document.getElementsByClassName("Metal");
	var d = document.getElementsByClassName("Metalcore");
	var e = document.getElementsByClassName("Acoustic");
	var f = document.getElementsByClassName("Rock");
	var g = document.getElementsByClassName("Rap");
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "0";
		a[i].style.zIndex = "0";
	}
	for (i = 0; i < b.length; i++) {
    	b[i].style.opacity = "0";
		b[i].style.zIndex = "0";
	}
	for (i = 0; i < c.length; i++) {
    	c[i].style.opacity = "0";
		c[i].style.zIndex = "0";
	}
	for (i = 0; i < d.length; i++) {
    	d[i].style.opacity = "0";
		d[i].style.zIndex = "0";
	}
	for (i = 0; i < e.length; i++) {
    	e[i].style.opacity = "0";
		e[i].style.zIndex = "0";
	}
	for (i = 0; i < f.length; i++) {
    	f[i].style.opacity = "0";
		f[i].style.zIndex = "0";
	}
	for (i = 0; i < g.length; i++) {
    	g[i].style.opacity = "0";
		g[i].style.zIndex = "0";
	}
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

/*Music*/

function Image5(){
	document.getElementById("PopPunk").style.opacity = "1";
	document.getElementById("PopPunk").style.zIndex = "1";
}

function Image6(){
	document.getElementById("Pop").style.opacity = "1";
	document.getElementById("Pop").style.zIndex = "1";
}

function Image7(){
	document.getElementById("Metalcore").style.opacity = "1";
	document.getElementById("Metalcore").style.zIndex = "1";
}

function Image8(){
	document.getElementById("Metal").style.opacity = "1";
	document.getElementById("Metal").style.zIndex = "1";
}

function Image9(){
	document.getElementById("Acoustic").style.opacity = "1";
	document.getElementById("Acoustic").style.zIndex = "1";
}

function Image10(){
	document.getElementById("Rock").style.opacity = "1";
	document.getElementById("Rock").style.zIndex = "1";
}

function Image11(){
	document.getElementById("Rap").style.opacity = "1";
	document.getElementById("Rap").style.zIndex = "1";
}

//Music

function BackM(){
	var a = document.getElementsByClassName("PopPunk");
	var b = document.getElementsByClassName("Pop");
	var c = document.getElementsByClassName("Metal");
	var d = document.getElementsByClassName("Metalcore");
	var e = document.getElementsByClassName("Acoustic");
	var f = document.getElementsByClassName("Rock");
	var g = document.getElementsByClassName("Rap");
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "0";
		a[i].style.zIndex = "0";
	}
	for (i = 0; i < b.length; i++) {
    	b[i].style.opacity = "0";
		b[i].style.zIndex = "0";
	}
	for (i = 0; i < c.length; i++) {
    	c[i].style.opacity = "0";
		c[i].style.zIndex = "0";
	}
	for (i = 0; i < d.length; i++) {
    	d[i].style.opacity = "0";
		d[i].style.zIndex = "0";
	}
	for (i = 0; i < e.length; i++) {
    	e[i].style.opacity = "0";
		e[i].style.zIndex = "0";
	}
	for (i = 0; i < f.length; i++) {
    	f[i].style.opacity = "0";
		f[i].style.zIndex = "0";
	}
	for (i = 0; i < g.length; i++) {
    	g[i].style.opacity = "0";
		g[i].style.zIndex = "0";
	}
	document.getElementById("PopPunk").style.opacity = "1";
	document.getElementById("Pop").style.opacity = "1";
	document.getElementById("Metal").style.opacity = "1";
	document.getElementById("Metalcore").style.opacity = "1";
	document.getElementById("Acoustic").style.opacity = "1";
	document.getElementById("Rock").style.opacity = "1";
	document.getElementById("Rap").style.opacity = "1";	
}

function MusicPp(){
	var a = document.getElementsByClassName("PopPunk");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicP(){
	var a = document.getElementsByClassName("Pop");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicM(){
	var a = document.getElementsByClassName("Metal");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicMc(){
	var a = document.getElementsByClassName("Metalcore");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicA(){
	var a = document.getElementsByClassName("Acoustic");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicR(){
	var a = document.getElementsByClassName("Rock");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}

function MusicRa(){
	var a = document.getElementsByClassName("Rap");
	document.getElementById("PopPunk").style.opacity = "0";
	document.getElementById("Pop").style.opacity = "0";
	document.getElementById("Metal").style.opacity = "0";
	document.getElementById("Metalcore").style.opacity = "0";
	document.getElementById("Acoustic").style.opacity = "0";
	document.getElementById("Rock").style.opacity = "0";
	document.getElementById("Rap").style.opacity = "0";
	var i;
	for (i = 0; i < a.length; i++) {
    	a[i].style.opacity = "1";
		a[i].style.zIndex = "1";
	}
}
