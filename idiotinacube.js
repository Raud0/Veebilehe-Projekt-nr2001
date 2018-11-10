function changeTab(pagename, element, colour){
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pagename).style.display = "block";
    
    element.style.backgroundColor = colour;
};

function shitstorm() {
	var giffid = document.getElementById("giffid");
	var video = document.getElementById("big_video");
	var paris_video = document.getElementById("Peepee");
	giffid.style.display = "none";
	video.style.display = "block";
	staller();
	setTimeout(function(){changeTab('Docking', this, 'aquamarine')},14000);
	setTimeout(function(){document.getElementById('kiraqueen').pause()},14000);
};
function aktiveeri_giffid() {
	var giffid = document.getElementById("giffid");
	giffid.style.display = "block";
};
function staller(){
	document.getElementById("Peepee").play();
	};
	
function video_eemaldaja() {
	var video = document.getElementById("big_video");
	document.getElementById("Peepee").pause();
	video.style.display = "none";
};
/*increment game code*/

var steps = 0

function takeStep(number){
    steps = steps + number;
    document.getElementById("c_steps").innerHTML = steps;
};
