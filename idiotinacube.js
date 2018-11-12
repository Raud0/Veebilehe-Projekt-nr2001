/*tab-change functionality*/
function changeTab(pagename, element, colour,song){
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
	
	var songs = ["spacecoast","kiraqueen","hog"];

	for (i = 0; i < tablinks.length; i++) {
		if (songs[i] == song){
			document.getElementById(song).play();
		} else {
		document.getElementById(songs[i]).pause();
		}
	}

	element.style.backgroundColor = colour;
	if (pagename != "JoJo"){
		clearTimeout(Tolm);
	}
};

function shitstorm() {
	document.getElementById("big_video").style.display = "none";
	Tolm = setTimeout(function(){
		document.getElementById("giffid").style.display = "none";
		document.getElementById("big_video").style.display = "block";
		document.getElementById("Peepee").play();
			setTimeout(function(){
				changeTab('Docking', this, 'aquamarine','');
				document.getElementById("big_video").style.display = "none";
				document.getElementById("Peepee").pause();
			},14000);
	},132250);
};

/*increment game code*/
var steps = 0

function takeStep(number){
    steps = steps + number;
    document.getElementById("c_steps").innerHTML = steps;
};
