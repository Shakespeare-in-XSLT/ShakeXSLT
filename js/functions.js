

$(document).ready(main);

function main() {
    
    // reads params from query in url and calls function to upload text   
    parametri = getParams(document.URL)
    if (parametri['ConttoLoad'] == 'Errors') {
        displayResult("xml/TheComedyOfErrors.xml", "xml/template.xsl");
    }
    else if (parametri['ConttoLoad'] == 'Tempest'){
        displayResult("xml/TheTempest.xml", "xml/template.xsl");
    }
    else if (parametri['ConttoLoad'] == 'Gentlemen'){
        displayResult("xml/TwoGentlemenOfVerona.xml", "xml/template.xsl");   
    }
};

// empty div content
function reset() {
    $("#example").empty();
}

function loadXMLDoc(filename) {
    // code for IE, it doesn't enter in this function in newer browsers, but just in case...
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP"); 
    }
    // create new XMLHttpRequest object with GET method
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try { xhttp.responseType = "msxml-document" } catch (err) { } // Helping IE11
    // send an empty request
    xhttp.send("");
    // return an xhttp response
    return xhttp.responseXML;
}

/**
* Gets specific XML and XSL names, process and append on current document page
* @param {String} xmlName
* @param {String} xslName
*/
function displayResult(xmlName, xslName) {
    // call the function for initiating an http request
    xml = loadXMLDoc(xmlName);
    xsl = loadXMLDoc(xslName);
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl); 
        // Processes this node and its children using the supplied xslt and returns the resulting transformation
        document.getElementById("example").innerHTML = ex;
        // calling function to create browsable index and get title of text
        new_index()
        getTitle()
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        // empty the destination div
        reset()
        // instantiating new XSLTprocessor object
        xsltProcessor = new XSLTProcessor();
        // import xslt through method
        xsltProcessor.importStylesheet(xsl);
        // transforming xml through xslt into destination document
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
        // calling function to create browsable index and get title of text
        new_index()
        getTitle()
    }
    // check if user from mobile device
    var isMobile = false;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        isMobile = true; // mobile!
        alert('Hey you! Flip your device to surf the index!')}
    // check if user from desktop with smaller window
    else {
        if(window.matchMedia("(max-width: 600px)").matches){
        alert ('Hey you! Maximize a little your browser window to surf the index!')
        }
    }
}


/**
* Gets params from url as an object
* @param {String} url
* @return {Object}
*/
var getParams = function (url) {
    var params = {};
    var match = url.match(/\?(.*)$/);
    if (match && match[1]) {
        match[1].split('&').forEach(function (pair) {
            pair = pair.split('=');
            params[pair[0]] = pair[1];
        });
    }
    return params;
};

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
