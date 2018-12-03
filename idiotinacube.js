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
		};

		if (sidestepping){takeaStep(0.5);}
		
		element.style.backgroundColor = colour;
		
		
		if (pagename == "JoJo" && document.getElementById("kiraupgrade")){
			shitstorm();
			countdown();
			liigutaja();
		}

		if (pagename == "AYAYA"){
			document.getElementById("shibuya").play();
		};

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

		},50);
	};
};

/*ayaya code*/
function RndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var colourlist = ["Gold","Aqua","SpringGreen","Orange","Magenta","Yellow","Lime","Seashell","Red","LightSkyBlue","GreenYellow","MediumVioletRed"];

window.setInterval(function(){

	colourlist.unshift(colourlist.pop());

	document.getElementById("r1").style.color = colourlist[0];
	document.getElementById("r2").style.color = colourlist[1];
	document.getElementById("r3").style.color = colourlist[2];
	document.getElementById("r4").style.color = colourlist[3];
	document.getElementById("r5").style.color = colourlist[4];
	document.getElementById("r6").style.color = colourlist[5];
	document.getElementById("r7").style.color = colourlist[6];
	document.getElementById("r8").style.color = colourlist[7];
	document.getElementById("r9").style.color = colourlist[8];
	document.getElementById("r10").style.color = colourlist[9];
	document.getElementById("r11").style.color = colourlist[10];
	document.getElementById("r12").style.color = colourlist[11];

},350);

var q6 = ["They","the CONNECTED","we","traps","the dead","they","the gods","men","the kings","mothers","PAEDOPHILES"];
var q1 = ["the unconnected","a bunch of WEEBS","star-crossed lovers","the extinct","the fateless","beasts of BURDEN"];
var q2 = ["song","home","gestalt","our motherland","zone","docking","fate","GREAT WAR","feast","dance","purpose","zone","PRESENT","ESCAPE"];
var q3 = ["The British G-5","The Red Army Choir","The PLANES","They","The geriatrics","The NAZI scientists","The Mongols","The natives","The Herero","The bureacrats","The wired","The hypermodernists","The annihilists","The pancake masters"];
var q4 = ["Japanese Zeros","the paparazzi","louds blasts","the choirs of angels","the hungry","the ceaseless public hangins","humanity's oldest friend","the smell of sizzling bacon","GOD"];
var q5 = ["silent","STRANGE","odd","hauntingly quite","pristine","uncomfortable","awkward","open","nostalgic","PRESENT"];
var q7 = ["the horizonless sea","U.S.S.R.","our old home","the blasted heath","the PRESENT","the shelled waste","our prison"];
var q8 = ["the BEFORE","the great mountainrange","the work of MAN","the old forest","the promised land","Acheron","Stix","graves waiting for their fill"];
var q9 = ["Wish you were here","If only you were alive to see this","You should visit","I know a nice place around where I sleep that makes a really good BURGER. Let's visit it, once you come around","You can't understand unless you see it with your own eyes","They won't let me leave"];
var q10 = ["the bombs drop","the pope visits","the peace treaties are signed","the young are SPIRITed away","the people are forced to leave","the last man is exectued","the food runs out","the war ends","the people remember they should be GROWING OLD","DOOMSDAY arrives"];
var q11 = ["one","in sync","together","of the same belief","alone","connected","apart of the Great JOKE","in love","everyone","bondage","schizophrenic","a somnambulist","drunk","directionless","confused"];
var q12 = ["place","juncture","junction of refugees","JOINT","city of HUNGER","shantytown","metropolis","TUMBLE","zone","decomposing garden","picadilly circus"];
var q13 = ["get lost","fall in LOVE","lose your FOOTing","lose oneself","end up finding new and interesting people","commit a murder","fall into line","become a part of the great hullabaloo","get into jazz","turn red","end up dead"];
var q14 = ["don't be humble, take a TUMBLE","THANATOS is patient","SALAMI goes best with Polish bread","moonlight cocktail isn't real","everything is a cyclical","the zero","I'm being hunted","I never was","kindness and cruelty lie side by side in the strangest places","the world is funny"];
var q15 = ["spend a night","come","GROW accustomed to the weirdos","DRINK with a stranger","dance the dance","become found","start to think","forget your name","find your past","get your home stolen"];
var q16 = ["beat","pulse","rhythm","heartbeat","jazz","current","zone","chemicals","thought","want","strangeness","despair","mood"];
var q17 = ["I've finally made it","I've completely lost it","I found my zero","They have lost me","the answer isn't here","I shouldn't leave","my shadow has peeled off of me","I'm the hero of a pulp noir","I'm approaching zero","there are 11 time-zones","I've drunk too much"];
var q18 = ["Where are the Snowdens of yesteryear?","Who drank all the goddamn COFFEE?","Who killed Cpt. Alex?","Why didn't you tell the word?","How can you know that?","Why haven't left yet?","Help! I'm inside the wall?","Do you have any idea how a moldy SALAMI sandwich must feel? Do you?","Why haven't we?","Here's to it!"];
var q19 = ["get going","hurry up","lose my shadow","STRANGLE someone","get some sleep","hide","be there","perform","say something","... best I didn't tell you","wish you well for now"];
var q20 = ["Faithfully","Sincerely","Hatefully","in Death","Forever","Only","With all my Heart","In practice only","In thought"];
var q21 = ["Yossarian","The Dr.","DONUT hole","ROCKET","Dearest Friend","Mike","Bob","Jack","Alice","Nora","Victoria","Elizabeth","GOD","The last free man in the West","Dude","A fellow traveller","John Titor"];
var q22 = ["What's more","By the by","Strangely enough","Also, I think that you should known","Anyways","Fianlly","As expected"];

var changeinterval = 1000;
window.setInterval(function(){

	document.getElementById("q1").innerHTML = q1[RndInt(0,q1.length)];
	document.getElementById("q2").innerHTML = q2[RndInt(0,q2.length)];
	document.getElementById("q3").innerHTML = q3[RndInt(0,q3.length)];
	document.getElementById("q4").innerHTML = q4[RndInt(0,q4.length)];
	document.getElementById("q5").innerHTML = q5[RndInt(0,q5.length)];
	document.getElementById("q6").innerHTML = q6[RndInt(0,q6.length)];
	document.getElementById("q7").innerHTML = q7[RndInt(0,q7.length)];
	document.getElementById("q8").innerHTML = q8[RndInt(0,q8.length)];
	document.getElementById("q9").innerHTML = q9[RndInt(0,q9.length)];
	document.getElementById("q10").innerHTML = q10[RndInt(0,q10.length)];
	document.getElementById("q11").innerHTML = q11[RndInt(0,q11.length)];
	document.getElementById("q12").innerHTML = q12[RndInt(0,q12.length)];
	document.getElementById("q13").innerHTML = q13[RndInt(0,q13.length)];
	document.getElementById("q14").innerHTML = q14[RndInt(0,q14.length)];
	document.getElementById("q15").innerHTML = q15[RndInt(0,q15.length)];
	document.getElementById("q16").innerHTML = q16[RndInt(0,q16.length)];
	document.getElementById("q17").innerHTML = q17[RndInt(0,q17.length)];
	document.getElementById("q18").innerHTML = q18[RndInt(0,q18.length)];
	document.getElementById("q19").innerHTML = q19[RndInt(0,q19.length)];
	document.getElementById("q20").innerHTML = q20[RndInt(0,q20.length)];
	document.getElementById("q21").innerHTML = q21[RndInt(0,q21.length)];
	document.getElementById("q22").innerHTML = q22[RndInt(0,q22.length)];

	changeinterval = RndInt(500,5000);

},changeinterval);

var zonesongs = ["along","before","connected","doomsday","god","great war","growing old","paedophiles","present","salami","thanatos","tumble"]
var zoneimages = ["strangle","burger","coffee","donut","drink","escape","foot","grow","hunger","joke","love","man","nazi","planes","rocket","spirit","strange","joint","burden","weebs"]

function zonebutton() {
	
	var answer = prompt("Where is the zone?").toLocaleLowerCase();

	if (zonesongs.includes(answer)) {
		document.getElementById(answer).play()
	}
	if (answer == "stop") {
		for (i = 0; i < zonesongs.length; i++) {
			document.getElementById(zonesongs[i]).pause();
		};
	};

	if (zoneimages.includes(answer)) {
		document.getElementById("shibuya").style.display = "none";
		document.getElementById("nowshowing").style.display = "block";
		document.getElementById("nowshowing").src = "imagefiles/zone/" + answer + ".jpg";
	};

}

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

var globaltime = 0;
var falltime = 0;
var falltimestart = 0;
var falltimeend = 0;

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
		astepspeed -= (9.8/0.3)*((r_acceleration-r_deceleration)/r_acceleration)*(rate/timespeed);
		falltime = falltime + timespeed/rate;
	}

	globaltime = globaltime + timespeed/rate;
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
	document.getElementById("speed_sign").textContent=" and \"the speed\" of ";
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
			astepspeed = -9.6/0.3;
			falling = true;
			document.getElementById("fall_sign").textContent=" and falling for ";
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
var falldepth = 0;
var fall_parabola = 0;
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
			addlogmessage('"For in the secret hour of life\'s midday the parabola is reversed, death is born."  -\xa0Carl\xa0Jung,\xa0The\xa0Soul\xa0and\xa0Death\xa0');
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
				falldepth = 100 - asteps;
				fall_parabola = 2*falldepth/(falltime/timespeed);
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
	
	if (falling){
		document.getElementById("fall_seconds").innerHTML = Math.round(falltime/1000);
	};
	document.getElementById("seconds").innerHTML = Math.round(globaltime/1000);

},rate);

var previous_asteps = 0;
var previous1_asteps = 0;
var previous2_asteps = 0;
var previous_bsteps = 0;
var previous1_bsteps = 0;
var previous2_bsteps = 0;
window.setInterval(function(){
	
	var average_aspeed = (asteps - previous2_asteps)*(4/3);
	previous2_asteps = previous1_asteps;
	previous1_asteps = previous_asteps;
	previous_asteps = asteps;
	document.getElementById("a_speed").innerHTML = Math.round(average_aspeed*1000)/1000;
	if (complex){
		var average_bspeed = (bsteps - previous2_bsteps)*(4/3);
		previous2_bsteps = previous1_bsteps;
		previous1_bsteps = previous_bsteps;
		previous_bsteps = bsteps;
		document.getElementById("b_speed").innerHTML = Math.round(average_bspeed*1000)/1000;
	};

},timespeed/4);

window.setInterval(function(){
	astepchecker(false);
	bstepchecker(false);
},1000);
