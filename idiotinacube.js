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

/*increment game code*/

var steps = 0

function takeStep(number){
    steps = steps + number;
    document.getElementById("c_steps").innerHTML = steps;
};