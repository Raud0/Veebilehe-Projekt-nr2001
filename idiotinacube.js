/*tab-change functionality*/
var currentpage = "";
var Tolm;
function changeTab(pagename, element, colour,song){
	if (currentpage != pagename){
		currentpage = pagename;
		
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
		
		
		if (pagename == "JoJo" && document.getElementById("kiraupgrade")){
			shitstorm();
			countdown();
		};
		};
		
	};

/*big brain code*/
function countdown() {
	var Taimer = 5000;
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
		var Tolm = setTimeout(function(){
		document.getElementById("giffid").style.display = "none";
		document.getElementById("tablist").style.display = "none"
		document.getElementById("big_video").style.display = "block";
		document.getElementById("Peepee").currentTime = 0;
		document.getElementById("Peepee").play();
		document.getElementById("Peepee").removeAttribute("controls");
		window.scrollTo(150,300);
		window.onscroll = function () { window.scrollTo(150, 300); };
			setTimeout(function(){
				document.getElementById("tablist").style.display = "block"
				document.getElementById("Peepee").pause();
				document.getElementById("big_video").style.display = "none";
				takebStep(1);
				makecomplex();
				document.getElementById("kiraqueen").pause();
				document.getElementById("kiraqueen").id = "replace";
				document.getElementById("kiraupgrade").id = "kiraqueen";
				window.onscroll=function(){};
				addlogmessage("You bite on some dust.");
				changeTab('Docking', this, 'aquamarine','');
				},14000);
	},5000);
		var Tolmukontroll = setInterval(function(){
			if(document.getElementById("JoJo").style.display === "none"){
			clearTimeout(Tolm);
			clearInterval(Intervall);
		}
	},50)	
		};
};

/*increment game code*/
var rate = 16;

var asteps = 0;
var bsteps = 0;
var complex = false

var astephighest = 0;
var astepachievement = [5,10,50,100]
var astepsachieved = [false,false,false,false];

var astepspeed = 0.00;
var bstepspeed = 0;
var timespeed = 1000;
var sidestepping = true;

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
	if (asteps >= astephighest){
		astephighest = asteps;
		if (astephighest >= astepachievement[0] && astepsachieved[0] == false){
			addlogmessage("You feel the ground shift beneath your feet.");
			astepsachieved[0] = true;
			astepspeed = astepspeed -0.01;
		}
		if (astephighest >= astepachievement[1] && astepsachieved[1] == false){
			addlogmessage("Sand is cascading down the incline.");
			astepsachieved[1] = true;
			astepspeed = astepspeed -0.05;
		}
		if (astephighest >= astepachievement[2] && astepsachieved[2] == false){
			addlogmessage("The top of the incline has started to rise away from you.");
			astepsachieved[2] = true;
			astepspeed = astepspeed -0.5;
		}
		if (astephighest >= astepachievement[3] && astepsachieved[3] == false){
			addlogmessage("The ground disappears!");
			astepsachieved[3] = true;
			astepspeed = astepspeed -24;
		}
	};	
};

window.setInterval(function(){
	takeaStep(astepspeed/rate);
	takebStep(bstepspeed/rate);
},timespeed/rate);

window.setInterval(function(){
	document.getElementById("a_steps").innerHTML = Math.round(asteps*1000)/1000;
	if (complex){
		document.getElementById("b_steps").innerHTML = Math.round(bsteps*1000)/1000;
	};
},rate);
