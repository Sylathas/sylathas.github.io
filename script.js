// JavaScript Document
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

$(document).ready(function(){
    $("#Traveldiv").hover(function(){
        $(this).css("height", "255");
        }, function(){
        $(this).css("height", "0");
    });
});