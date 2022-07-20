$(document).ready(new_index)

function new_index(){
    // save the title with specific class
    var bau = $("h2[class='act']")
    //create paragraph with id of specific act and associate function on click to scroll to that specific part of text
    for (var i=0; i<bau.length; i++){
        $("#att").append("<p id='" + String(i+1) + "' onclick=jumpto('act_" + String(i+1) + "')>" + bau[i].innerText + "</p>")
        // create an ul corresponding to the scenes of that act
        $("#att").append("<ul id='scene_" + String(i+1) + "'></ul>")
        var miao = $("[id*='a"+String(i+1)+"_s']");
        for (var y=0; y<miao.length; y++){
            // create an element of the list for every scene assciated on click to function 
            $("#scene_" + String(i+1)).append("<li onclick=jumpto('a"+ String(i+1) + "_s" + String(y+1) + "')>"+ miao[y].innerText + "</li>")   
        }
    }
}

function getTitle(){
    var title = $("h1[id='title']")
    for (var i=0; i<title.length; i++){
    $("#titolo").append("<h1 class='headline'>" + title[i].innerText + "</h1>");
    $("#title").css({"display": "none"});
    }
}

// scroll to specific info        
function jumpto(thediv){
    document.getElementById(thediv).scrollIntoView({behavior: 'smooth'});
}


//When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
