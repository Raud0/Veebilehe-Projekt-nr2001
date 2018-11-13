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

	takeaStep(0.5);
	element.style.backgroundColor = colour;
	
	if (pagename != "JoJo"){
		clearTimeout(Tolm);
	};
	if (pagename == "JoJo" && document.getElementById("kiraupgrade")){
		countdown();
	};
}

function countdown() {
	var Taimer = 132500;
	document.getElementById("timeridiv").style.display = "block";
	var Intervall = setInterval(function(){
		if(document.getElementById("JoJo").style.display === "none"){
			clearInterval(Intervall);
		}
		else{
		Taimer = Taimer - 37;
		var minutid = Math.floor(Taimer / (1000 * 60) );
		var sekundid = Math.floor(Taimer % (1000 * 60) / 1000);
		var milli = Math.floor(Taimer % 1000)
		document.getElementById("timer").innerHTML = "TIME UNTIL BITEZ ZA DUSTO ACTIVATION "+ "<br>" + minutid
		+ "min " + sekundid + "s " + milli + "ms ";
		if (Taimer <= 0){
			clearInterval(Intervall);
			document.getElementById("timeridiv").style.display = "none";}
		}
	},37);
};
function shitstorm() {
	document.getElementById("giffid").style.display = "block"
	document.getElementById("kiraqueen").currentTime = 0;
	document.getElementById("big_video").style.display = "none";
	if(document.getElementById("replace")){}
	else{
		Tolm = setTimeout(function(){
		document.getElementById("giffid").style.display = "none";
		document.getElementById("tablist").style.display = "none"
		document.getElementById("big_video").style.display = "block";
		document.getElementById("Peepee").currentTime = 0;
		document.getElementById("Peepee").play();
			setTimeout(function(){
				document.getElementById("tablist").style.display = "block"
				document.getElementById("Peepee").pause();
				document.getElementById("big_video").style.display = "none";
				takebStep(1);
				makecomplex();
				document.getElementById("kiraqueen").pause();
				document.getElementById("kiraqueen").id = "replace";
				document.getElementById("kiraupgrade").id = "kiraqueen";
				changeTab('Docking', this, 'aquamarine','');
				},14000);
	},132500);}
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
