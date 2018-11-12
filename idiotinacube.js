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

	for (i = 0; i < songs.length; i++) {
		if (songs[i] == song){
			document.getElementById(song).play();
		} else {
		document.getElementById(songs[i]).pause();
		}
	}

	takeaStep(0.5)

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
				document.getElementById("Peepee").pause();
				document.getElementById("big_video").style.display = "none";
				takebStep(1);
				makecomplex();
				changeTab('Docking', this, 'aquamarine','');
			},14000);
	},132500);
};

/*increment game code*/
var asteps = 0;
var bsteps = 0;

function takeaStep(number){
    asteps = asteps + number;
    document.getElementById("a_steps").innerHTML = asteps;
};
function takebStep(number){
    bsteps = bsteps + number;
    document.getElementById("b_steps").innerHTML = bsteps;
};
function makecomplex(){
	document.getElementById("b_steps_i").textContent="i";
	document.getElementById("ab_sign").textContent=" + ";
};
