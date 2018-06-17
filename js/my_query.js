 // JavaScript Document

$(document).ready(function() {
  $('a').click(function(event) {
    event.preventDefault();
    $(this).hide("slow");
  });
});

//Viaggi

function openDiv() {
	$("#Traveldiv").height($(window).height()).css({"z-index":1,"top":"0px"});
	$("#Close").fadeTo(500,1);
	$(".Europe,.World").show().fadeTo(200,0).css({"z-index": 0, "cursor":"pointer"});
	$("#Europe").delay(900).fadeTo(200,1).css("z-index",1);
	$("#World").delay(1000).fadeTo(200,1).css("z-index",1);
}

function closeDiv() {
	$("#Traveldiv").height(100).css({"top":"300px"}).delay(1000).css({"z-index": 0, "cursor":"default"});
	$("#Close").fadeTo(500,0);
	$("#Travelp").css("font-size","60px");
	$("#World, #Europe, .Europe,.World").fadeTo(200,0).css("z-index",0);
}

//Musica

function openDiv3() {
	$("#Musicdiv").height($(window).height()).css({"z-index":1,"top":"0px"});
	$("#Close2").fadeTo(500,1);
	$(".PopPunk,.Pop,.Metal,.Metalcore,.Acoustic,.Rock,.Rap").show().fadeTo(200,0).css({"z-index": 0, "cursor":"pointer"});
	$("#PopPunk").delay(900).fadeTo(200,1).css("z-index",1);
	$("#Pop").delay(950).fadeTo(200,1).css("z-index",1);
	$("#Metalcore").delay(1000).fadeTo(200,1).css("z-index",1);
	$("#Metal").delay(1050).fadeTo(200,1).css("z-index",1);
	$("#Acoustic").delay(1100).fadeTo(200,1).css("z-index",1);
	$("#Rock").delay(1150).fadeTo(200,1).css("z-index",1);
	$("#Rap").delay(1200).fadeTo(200,1).css("z-index",1);
}

function closeDiv3() {
	$("#Musicdiv").height(100).css({"top":"500px"}).delay(1000).css("z-index",0);
	$("#Close2").fadeTo(500,0);
	$("#Musicp").css("font-size","60px");
	$("#PopPunk,#Pop,#Metal,#Metalcore,#Acoustic,#Rock,#Rap,.PopPunk,.Pop,.Metal,.Metalcore,.Acoustic,.Rock,.Rap").fadeTo(200,0).css({"z-index": 0, "cursor":"default"});
}

//Interessi

function openDiv4() {
	$("#Filmdiv").height($(window).height()).css({"z-index":1,"top":"0px"});
	$("#Close3").fadeTo(500,1).css("z-index",2);
	$("#Games, #Computer, #Guitar, #Design, #Photograpy, #Architecture, #Tea, #G, #Red, #C, #Blue, #Ga, #Green, #D, #Yellow, #A, #Orange, #P,#Pink,#T,#Purple").fadeTo(1,0).show().css({"z-index": 0, "cursor":"pointer"});
	$("#Guitar").delay(900).fadeTo(200,1).css("z-index",1);
	$("#Computer").delay(950).fadeTo(200,1).css("z-index",1);
	$("#Games").delay(1000).fadeTo(200,1).css("z-index",1);
	$("#Design").delay(1050).fadeTo(200,1).css("z-index",1);
	$("#Photograpy").delay(1100).fadeTo(200,1).css("z-index",1);
	$("#Architecture").delay(1150).fadeTo(200,1).css("z-index",1);
	$("#Tea").delay(1200).fadeTo(200,1).css("z-index",1);
}


function closeDiv4() {
	$("#Filmdiv").height(100).css({"top":"600px"}).delay(1000).css("z-index",0);
	$("#Photograpy, #Guitar, #Computer, #Games, #Design, #Architecture, #Tea").width($(window).width()*0.14285);
	$("#G, #Red, #C, #Blue, #Ga, #Green, #D, #Yellow, #A, #Orange, #P,#Pink,#T,#Purple,#Close3, #Games, #Computer, #Guitar, #Design, #Photograpy, #Architecture, #Tea").fadeTo(200,0).css({"z-index": 0, "cursor":"default"});
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

//Work 

function openDiv2() {
	$("#Designdiv").height($(window).height()).css({"z-index":1,"top":"0px"});
	$("#Close1").fadeTo(500,1);
	$(".Pers,.Uni, .Testi").fadeTo(1,0).show().css({"z-index": 0, "cursor":"pointer"});;
	$("#Personal").delay(900).fadeTo(200,1).css("z-index",1);
	$("#University").delay(1000).fadeTo(200,1).css("z-index",1);
}

function closeDiv2() {
	$("#Designdiv").height(100).css({"top":"400px"}).delay(1000).css("z-index",0);
	$("#Close1").fadeTo(500,0);
	$("#Designp").css("font-size","60px");
	$("#Personal, #University,.Pers,.Uni,.Testi").fadeTo(200,0).delay(1000).css({"z-index": 0, "cursor":"default"});
	$("#App").css({"left":"14.29vw"}).width($(window).width()*0.1429);
	$("#Concerto").css({"left":"28.58vw"}).width($(window).width()*0.1429);
	$("#Leo").css({"left":"71.55vw"}).width($(window).width()*0.1429);
	$("#Daredevil").css({"left":"42.97vw"}).width($(window).width()*0.1429);
	$("#Giorni").css({"left":"57.26vw"}).width($(window).width()*0.1429);
	$("#Elezioni").css({"left":"85.84vw"}).width($(window).width()*0.1429);
	$("#App2,#App3").fadeTo(200,0).width($(window).width()*0.1429).css("z-index",0);
}

function WorkP(){
	$(".Pers").css("z-index", 1).fadeTo(200, 1);
	$(".Uni").fadeTo(200, 0);
	$("#Personal, #University,#App2,#App3").fadeTo(200, 0);
	$(".ThreeA").fadeTo(200,0);
}

function WorkU(){
	$(".Uni").css("z-index", 1).fadeTo(200, 1);
	$("#Personal, #University").fadeTo(200, 0);
}

function BackW(){
	$(".Pers, .Uni").css("z-index", 0).fadeTo(200, 0);
	$("#Personal, #University").fadeTo(200, 1);
}

function App(){
		$(".ThreeA").fadeTo(200,1);
		$("#App").css("left","28vw");
		$("#App4").css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Daredevil,#Elezioni,#Concerto,#Giorni,#Leo,#Back1").fadeTo(200,0);
		$("#App,#App2,#App3").delay(200).fadeTo(300,1).width($(window).width()*0.28).css("z-index",1);
}

function BackApp(){
		$(".ThreeA").fadeTo(200,0);
		$("#App").css({"left":"14.29vw"}).width($(window).width()*0.1429);
		$("#App4").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Daredevil,#Elezioni,#Concerto,#Giorni,#Leo,#Back1").delay(300).fadeTo(200,1);
		$("#App2,#App3").fadeTo(200,0).width($(window).width()*0.1429).css("z-index",0);
		$(".Back").css("z-index", 1);
}

function Concerto(){
		$(".ThreeA").fadeTo(200,1);
		$("#Concerto").css("left","0vw");
		$("#Concerto2,#Concertotesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Daredevil,#Elezioni,#App,#Giorni,#Leo,#Back1").fadeTo(200,0);
		$("#Concerto").delay(200).fadeTo(300,1).width($(window).width()*0.4).css("z-index",1);
}

function BackConcerto(){
		$(".ThreeA").fadeTo(200,0);
		$("#Concerto").css({"left":"28.58vw"}).width($(window).width()*0.1429);
		$("#Concerto2, #Concertotesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Daredevil,#Elezioni,#App,#Giorni,#Leo,#Back1").delay(300).fadeTo(200,1);
		$(".Back").css("z-index", 1);
}

function Daredevil(){
		$(".ThreeA").fadeTo(200,1);
		$("#Daredevil").css("left","0vw");
		$("#Daredevil2,#Daredeviltesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Concerto,#Elezioni,#App,#Giorni,#Leo,#Back1").fadeTo(200,0);
		$("#Daredevil").delay(200).fadeTo(300,1).width($(window).width()*0.4).css("z-index",1);
}

function BackDaredevil(){
		$(".ThreeA").fadeTo(200,0);
		$("#Daredevil").css({"left":"42.97vw"}).width($(window).width()*0.1429);
		$("#Daredevil2, #Daredeviltesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Concerto,#Elezioni,#App,#Giorni,#Leo,#Back1").delay(300).fadeTo(200,1);
		$(".Back").css("z-index", 1);
}

function Giorni(){
		$(".ThreeA").fadeTo(200,1);
		$("#Giorni").css("left","0vw");
		$("#Giorni2,#Giornitesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Concerto,#Elezioni,#App,#Daredevil,#Leo,#Back1").fadeTo(200,0);
		$("#Giorni").delay(200).fadeTo(300,1).width($(window).width()*0.4).css("z-index",1);
}

function BackGiorni(){
		$(".ThreeA").fadeTo(200,0);
		$("#Giorni").css({"left":"57.26vw"}).width($(window).width()*0.1429);
		$("#Giorni2, #Giornitesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Concerto,#Elezioni,#App,#Daredevil,#Leo,#Back1").delay(300).fadeTo(200,1);
		$(".Back").css("z-index", 1);
}

function Leo(){
		$(".ThreeA").fadeTo(200,1);
		$("#Leo").css("left","0vw");
		$("#Leo2,#Leotesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Concerto,#Elezioni,#App,#Daredevil,#Giorni,#Back1").fadeTo(200,0);
		$("#Leo").delay(200).fadeTo(300,1).width($(window).width()*0.4).css("z-index",1);
}

function BackLeo(){
		$(".ThreeA").fadeTo(200,0);
		$("#Leo").css({"left":"71.55vw"}).width($(window).width()*0.1429);
		$("#Leo2, #Leotesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Concerto,#Elezioni,#App,#Daredevil,#Giorni,#Back1").delay(300).fadeTo(200,1);
		$(".Back").css("z-index", 1);
}

function Elezioni(){
		$(".ThreeA").fadeTo(200,1);
		$("#Elezioni").css("left","0vw");
		$("#Elezioni2,#Elezionitesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Concerto,#Leo,#App,#Daredevil,#Giorni,#Back1").fadeTo(200,0);
		$("#Elezioni").delay(200).fadeTo(300,1).width($(window).width()*0.4).css("z-index",3);
}

function BackElezioni(){
		$(".ThreeA").fadeTo(200,0);
		$("#Elezioni").css({"left":"85.84vw"}).width($(window).width()*0.1429).css("z-index",1);
		$("#Elezioni2, #Elezionitesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Concerto,#Leo,#App,#Daredevil,#Giorni,#Back1").delay(300).fadeTo(200,1);
		$(".Back").css("z-index", 1);
}

function Guernica(){
		$(".ThreeA").fadeTo(200,1);
		$("#Guernica").css("left","0vw");
		$("#Guernica2,#Guernicatesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Uvetta,#Impaginazioni,#Back2").fadeTo(200,0);
		$("#Guernica").delay(200).fadeTo(300,1).width($(window).width()*0.84).css("z-index",3);
}

function BackGuernica(){
		$(".ThreeA").fadeTo(200,0);
		$("#Guernica").css({"left":"25vw"}).width($(window).width()*0.25).css("z-index",1);
		$("#Guernica2, #Guernicatesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Uvetta,#Impaginazioni,#Back2").delay(300).fadeTo(200,1);
}

function Uvetta(){
		$(".ThreeA").fadeTo(200,1);
		$("#Uvetta").css("left","0vw");
		$("#Uvetta2,#Uvettatesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Guernica,#Impaginazioni,#Back2").fadeTo(200,0);
		$("#Uvetta").delay(200).fadeTo(300,1).width($(window).width()*0.84).css("z-index",3);
}

function BackUvetta(){
		$(".ThreeA").fadeTo(200,0);
		$("#Uvetta").css({"left":"75vw"}).width($(window).width()*0.25).css("z-index",1);
		$("#Uvetta2, #Uvettatesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Guernica,#Impaginazioni,#Back2").delay(300).fadeTo(200,1);
}

function Impaginazioni(){
		$(".ThreeA").fadeTo(200,1);
		$("#Impaginazioni").css("left","0vw");
		$("#Impaginazioni2,#Impaginazionitesto").delay(300).css({"cursor": "w-resize"}).fadeTo(300,1).css("z-index",2);
		$("#Guernica,#Uvetta,#Back2").fadeTo(200,0);
		$(".C").height($(window).height()*1)
		$("#Impaginazioni").delay(200).fadeTo(300,1).width($(window).width()*0.84).css("z-index",3);
}

function BackImpaginazioni(){
		$(".ThreeA").fadeTo(200,0);
		$(".C").height($(window).height()*0.85);
		$("#Impaginazioni").css({"left":"50vw"}).width($(window).width()*0.25).css("z-index",1);
		$("#Impaginazioni2, #Impaginazionitesto").css({"cursor": "pointer"}).fadeTo(200,0).css("z-index",0);
		$("#Guernica,#Uvetta,#Back2").delay(300).fadeTo(200,1);
}