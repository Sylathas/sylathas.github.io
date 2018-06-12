 // JavaScript Document
$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
  });
});

function closeDiv4() {
	document.getElementById("Filmdiv").style.height = "100px";
	document.getElementById("Filmdiv").style.top = "600px";
	$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285);
	$("#G, #Red").fadeTo(200, 0).hide();
	$("#Close3, #Games, #Computer, #Guitar, #Design, #Photograpy, #Architecture, #Tea, #Red, #G").fadeTo(1,0).css("z-index", 0);
	$("#Guitar").removeClass("Apri");
}

function InterestG(){
			if ($("#Guitar").hasClass("Apri")) {;
				$("#G").fadeTo(1,0);
				$("#Red").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
				$("#Guitar").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#G").delay(400).fadeTo(200,1);
				$("#Red").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Guitar").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Games, #Computer, #Photograpy, #Design, #Architecture, #Tea").width("0");
			}
}

function InterestC(){
			if ($("#Computer").hasClass("Apri")) {
				$("#C").fadeTo(1,0);
				$("#Blue").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
				$("#Computer").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#C").delay(400).fadeTo(200,1);
				$("#Blue").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Computer").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Games, #Photograpy, #Design, #Architecture, #Tea").width("0");
			}
}

function InterestGa(){
			if ($("#Games").hasClass("Apri")) {
				$("#Games").removeClass("Apri");
				$("#Ga").fadeTo(1,0);
				$("#Green").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#Ga").delay(400).fadeTo(200,1);
				$("#Green").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Games").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Computer, #Photograpy, #Design, #Architecture, #Tea").width("0");
			}
}

function InterestD(){
			if ($("#Design").hasClass("Apri")) {
				$("#D").fadeTo(1,0);
				$("#Yellow").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
				$("#Design").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#D").delay(400).fadeTo(200,1);
				$("#Yellow").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Design").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Computer, #Games, #Photograpy, #Architecture, #Tea").width("0");
			}
}

function InterestP(){
			if ($("#Photograpy").hasClass("Apri")) {
				$("#P").fadeTo(1,0);
				$("#Orange").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
				$("#Photograpy").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#P").delay(400).fadeTo(200,1);
				$("#Orange").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Photograpy").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width("0");
			}
}

function InterestA(){
			if ($("#Architecture").hasClass("Apri")) {
				$("#A").fadeTo(1,0);
				$("#Pink").animate({width: "-=57.145vw", opacity: 0}, 500).fadeTo(1,0);
				$("#Architecture").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#A").delay(400).fadeTo(200,1);
				$("#Pink").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Architecture").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Computer, #Games, #Design, #Photograpy, #Tea").width("0");
			}
}

function InterestT(){
			if ($("#Tea").hasClass("Apri")) {
				$("#T").fadeTo(1,0);
				$("#Purple").animate({width: "-=57.145vw", opacity: 0}, 500);
				$("#Tea").removeClass("Apri");
    			$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285).css("cursor", "pointer");

			} else { 
				$("#T").delay(400).fadeTo(200,1);
				$("#Purple").fadeTo(1,1).animate({width: "+=57.145vw"}, 500);
				$("#Tea").width($(window).width()*0.42855).addClass("Apri").css("cursor", "w-resize");
				$("#Guitar, #Computer, #Games, #Design, #Photograpy, #Architecture").width("0");
			}
}