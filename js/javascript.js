// JavaScript Document

/*Menu*/

function Link(){
	location.href='index.html';
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
