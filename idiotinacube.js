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

	if (sidestepping){takeaStep(0.5);}

	element.style.backgroundColor = colour;
	if (pagename != "JoJo"){
		clearTimeout(Tolm);
	}
};

/*big brain code*/
function shitstorm() {
	document.getElementById("kiraqueen").currentTime = 0;
	document.getElementById("big_video").style.display = "none";
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
				addlogmessage("You bite on some dust.");
				changeTab('Docking', this, 'aquamarine','');
			},14000);
	},132500);
};

/*increment game code*/
var asteps = 0;
var bsteps = 0;
var complex = false

var astephighest = 0;
var astepachievement = [5,10]
var astepsachieved = [false,false]

var astepspeed = 0.00;
var bstepspeed = 0;
var timespeed = 1000;
var sidestepping = false

function takeaStep(number){
	asteps = asteps + number;
	astepchecker()
};
function takebStep(number){
    bsteps = bsteps + number;
};
function makecomplex(){
	complex = true;
	document.getElementById("b_steps_i").textContent="i";
	document.getElementById("ab_sign").textContent=" + ";
};

function updateScroll(){
	var logdiv = document.getElementById("loglist");
	logdiv.scrollTop = logdiv.scrollHeight;
};

function addlogmessage(logmessage){
	var node = document.createElement("li");
	var textnode = document.createTextNode(logmessage);
	node.appendChild(textnode);
	document.getElementById("loglist").appendChild(node);
	updateScroll();
};

function astepchecker(){
	if (asteps > astephighest){
		astephighest = asteps;
		if (astephighest == astepachievement[0] && astepsachieved[0] == false){
			addlogmessage("You feel the ground shift beneath your feet.");
			astepsachieved[0] = true;
			astepspeed = -0.01;
		}
	};	
};

window.setInterval(function(){
	takeaStep(astepspeed);
	takebStep(bstepspeed);
},timespeed);

window.setInterval(function(){
	document.getElementById("a_steps").innerHTML = Math.round(asteps*1000)/1000;
	if (complex){
		document.getElementById("b_steps").innerHTML = Math.round(bsteps*1000)/1000;
	};
},16);
