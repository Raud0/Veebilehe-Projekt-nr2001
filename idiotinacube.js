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
			liigutaja();
		}
		/* if (pagename == "Ronald") {
		    ronalds();
		} */
	};
		
};

/*Doesn't yet work, but don't want conflicts so gon leave this in, same for the ronald above

function ronalds() {
	
	var parameta = document.createElement("img");
	var giffu = document.createElement("imagefiles/Insanity.gif");
	var elemental = document.getElementById("ClownGif");
	setInterval(giffing, 1000);
}

function giffing() {
        parameta.appendChild(giffu);
		elemental.appendChild(parameta);
		setTimeout(giffing,3000);
}

*/

/*big brain code*/


function liigutaja() {
	pilt = document.getElementById("SecretQueen");
	pilt.style.display = "none";
	var posx = 1860;
	var posy = 400;
	var liikumisintervall = setInterval(millisekund,200);
	function millisekund(){
		pilt.style.display = "block";
		if(document.getElementById("JoJo").style.display === "none"){
			clearInterval(liikumisintervall);
		}
		else{
			if (posx == 1199){
				clearInterval(liikumisintervall);
				pilt.style.display = "none";
			}
			else{
				posx = posx - 1;
				pilt.style.top = posy + "px";
				pilt.style.left = posx + "px";
			}
		}
	}
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
	document.getElementById("big_video").style.display = "none";
	
	document.getElementById("kiraqueen").currentTime = 0;

	if(document.getElementById("replace")){
	}else{
		
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
				
				document.getElementById("kiraqueen").pause();
				document.getElementById("kiraqueen").id = "replace";
				document.getElementById("kiraupgrade").id = "kiraqueen";

				takebStep(1);
				makecomplex();
				addlogmessage("You bite on some dust.");
				document.getElementById("JoJo").style.backgroundImage = "url('imagefiles/kirabackground2.png')";

				window.onscroll=function(){};
				changeTab('Docking', this, 'aquamarine','');
			},14000);

		},132500);

			setInterval(function(){
				if(document.getElementById("JoJo").style.display === "none"){
				clearTimeout(Tolm);
				clearInterval(Intervall);
			}

		},50)
	};
};

/*increment game code, clickmod=1 and rate=16 are the default values*/
var clickmod = 1;

var asteps = 0;
var bsteps = 0;

var rate = 16;
var timespeed = 1000;
var cycletime = 0;
var astepspeed = 0;
var bstepspeed = 0;
var cycledivider = 2500;


window.setInterval(function(){
	var astepspeedreal = astepspeed;
	var bstepspeedreal = bstepspeed;
	if (barying&&bsteps>barylevel/2/rate){
		astepspeedreal = astepspeedreal + barylevel/2;
		bstepspeedreal = bstepspeedreal - barylevel/2;
	}
	if (cycling){
		astepspeedreal = astepspeedreal - cyclelevel*Math.sin(Math.PI*cycletime/cycledivider);
		bstepspeedreal = bstepspeedreal + cyclelevel*Math.sin(Math.PI*cycletime/cycledivider);
		cycletime = cycletime + rate;
	}
	takeautoaStep(astepspeedreal/rate);
	takeautobStep(bstepspeedreal/rate);
	if (falling){
		var r_acceleration = 588.0;
		var r_deceleration = 23.0;
		if (astepspeed > -200){
			var t_decel = Math.abs(astepspeed/4)
			r_deceleration = r_deceleration + Math.sqrt(t_decel);
		} else {
			r_deceletarion = r_deceleration + 17;
		}
		astepspeed -= 9.8*((r_acceleration-r_deceleration)/r_acceleration)*(rate/timespeed);
	}
},timespeed/rate);

function takeaStep(number){
	asteps = asteps + number*clickmod;
	astepchecker(true);
};
function takebStep(number){
	bsteps = bsteps + number*clickmod;
	bstepchecker(true);
};

function takeautoaStep(number){
	asteps = asteps + number;
};
function takeautobStep(number){
	bsteps = bsteps + number;
};

var complex = false;
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

var astephighest = 0;
var astepachievement = [11,33,66,100,-36,-333];
var astepsachieved = [false,false,false,false,false,false];
function astepchecker(clicked){
	if (clicked && !astepsachieved[4] && asteps < astepachievement[4]){
		addlogmessage("Your feet fail to find a footing.");
		astepsachieved[4] = true;
		document.getElementById("astepbutton").style.display = "none";
	}
	if (!astepsachieved[5] && asteps < astepachievement[5]){
		addlogmessage("There is no bottom.");
		astepsachieved[5] = true;
		makecomplex();
		document.getElementById("bstepbutton").style.display = "inline";
	}
	if (asteps >= astephighest){
		astephighest = asteps;
		if (!astepsachieved[0] && astephighest >= astepachievement[0]){
			addlogmessage("The ground is shifting.");
			astepsachieved[0] = true;
			astepspeed = astepspeed -0.01;
		}
		if (!astepsachieved[1] && astephighest >= astepachievement[1]){
			addlogmessage("The precipice starts to rise.");
			astepsachieved[1] = true;
			astepspeed = astepspeed -0.5;
		}
		if (!astepsachieved[2] && astephighest >= astepachievement[2]){
			addlogmessage("The top is a stone's throw away.");
			astepsachieved[2] = true;
		}
		if (!astepsachieved[3] && astephighest >= astepachievement[3]){
			addlogmessage("The ground crumbles! You're plummeting back to the bottom!");
			astepsachieved[3] = true;
			astepspeed = -9.6;
			falling = true;
		}
	};	
};

var bstephighest = 0;
var bstepachievement = [3];
var bstepsachieved = [false];
function bstepchecker(clicked){	
	if (bsteps >= bstephighest){
		if (!bstepsachieved[0] && bsteps >= bstepachievement[0]){
			bstepsachieved[0] = true;
			document.getElementById("shop").style.display = "block";
			document.getElementById("parabolic").style.display = "block";
		};
	};
};

var sidestepping = false;
var falling = false;
var falllevel = -1;
var barycentreprice = 10;
var barylevel = 0;
var barying = false;
var cycleprice = 1;
var cyclelevel = 0;
var cycling = false;
function purchase(item,aneg,aprice,bneg,bprice){
	if ((aneg*(asteps-aprice) >= 0) && (bneg*(bsteps-bprice) >= 0)){
		if (item == "parabolic"){
			bsteps -= bprice;
			addlogmessage('"For in the secret hour of life\'s midday the parabola is reversed, death is born."  -\xa0Carl\xa0Jung,\xa0The\xa0Soul\xa0and\xa0Death\xa00:21');
			document.getElementById("shop1").style.display = "block";
			document.getElementById("stopfalling").style.display = "block";	
			document.getElementById("parabolic").style.display = "none";	
		};
		if (item == "periodic"){
			bsteps -= bprice;
			addlogmessage("All that rises, must one day fall. And as this fact holds so does its inverse.");
			document.getElementById("shop2").style.display = "block";
			document.getElementById("cycle").style.display = "block";
			document.getElementById("periodic").style.display = "none";	
		};
		if (item == "stopfalling"){
			if (!falling){
				falllevel = falllevel + 1;
				if (falllevel == 10){
					addlogmessage("Perhaps you're not just falling but, in fact, tumbling down, along with all else, to the primeval womb of the universe.");
					bstepspeed = bstepspeed + 1;
					document.getElementById("stopfalling").style.display = "none";
				} else {
					addlogmessage("You're currently not falling.");
				}
			} else {
				falling = false;
				bsteps -= bprice;
				addlogmessage("Everything is relative.");
				astepspeed = 0;
				astepsachieved[0] = true;
				astepsachieved[1] = true;
				astepsachieved[2] = true;
				astepsachieved[3] = true;
				document.getElementById("barycentre").style.display = "block";
			};
		};
		if (item == "barycentre"){
			bsteps -= bprice;
			if (bprice == 10){
				addlogmessage('"I am Gravity, I am that against which the Escalation must struggle, to which the meaningless pre\u2011cosmic vastnesses submit and are transmuted to the very substance of History." -\xa0Tynchon\xa00:21');
				barying = true;
			};
			barylevel = barylevel + 1;
			barycentreprice = Math.round(barycentreprice*1.1*100)/100;
			document.getElementById("barycentreprice").innerHTML = barycentreprice;
			if (barylevel >= 4){
				document.getElementById("periodic").style.display = "block";
			}
		};
		if (item == "cycle"){
			bsteps -= bprice;
			if (bprice == 1){
				addlogmessage("");
				cycling = true;
			};
			cyclelevel = cyclelevel + 1;
			cycleprice = cycleprice + 1;
			document.getElementById("cycleprice").innerHTML = cycleprice;
		};
	} else {
		document.getElementById(item).getElementsByClassName("buycell")[0].style.backgroundColor = "darkorange";
			setTimeout(function() {
				document.getElementById(item).getElementsByClassName("buycell")[0].style.backgroundColor = "initial";
			}, 100);
	}
		
}

window.setInterval(function(){
	document.getElementById("a_steps").innerHTML = Math.round(asteps*1000)/1000;
	if (complex){
		document.getElementById("b_steps").innerHTML = Math.round(bsteps*1000)/1000;
	};
},rate);

window.setInterval(function(){
	astepchecker(false);
	bstepchecker(false);
},1000);
