function changepage(pagename, element, colour){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.display = "";
    }

    document.getElementById(pagename).style.display = "block";
    
    element.style.backgroundColor = colour;
}

document.getElementById("defaultOpen").click();