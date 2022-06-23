var UserClasses_init = {}
localStorage.setItem('UserClasses', JSON.stringify(UserClasses_init))

$(document).ready(main);

function main() {

    $('#showAct').click(function () {
        if (this.checked){
            $('.act').addClass('acts')
            $('.acts').css({"background-color": "#ffddff"})}
        else
            $('.acts').css({"background-color": "transparent"})
    })

    $('#showScenes').click(function () {
        if (this.checked){
            $('.scene').addClass('scenes')
            $('.scenes').css({"background-color": "#ddffdd"})}
        else
            $('.scenes').css({"background-color": "transparent"})
    
    })

    $('#showPeople').click(function () {
        if (this.checked){
            $('.person').addClass('people')
            $('.people').css({"background-color": "#ffffdd"})
        }
        else
            $('.people').css({"background-color": "transparent"})
    
    }
    )

    $('#showActions').click(function () {
        if (this.checked){
            $('.actions').addClass('stage')
            $('.stage').css({"background-color": "#cce6ff"})}
        else
            $('.stage').css({"background-color": "transparent"})
    
    }
    )

    parametri = getParams(document.URL)
    if (parametri['ConttoLoad'] == 'Gentlemen') {
        displayResultGentlemen()

    }
    else if (parametri['ConttoLoad'] == 'Tempest'){
        displayResultTempest()
       
    }
    else if (parametri['ConttoLoad'] == 'Errors'){
        displayResultErrors()
        
    }
};


function reset() {
    $("#example").empty();
}

function loadXMLDoc(filename) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try { xhttp.responseType = "msxml-document" } catch (err) { } // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}



function displayResultErrors() {
    xml = loadXMLDoc("./xml/TheComedyOfErrors.xml");
    xsl = loadXMLDoc("./xml/template.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
        new_index()
        getTitle()
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
        new_index()
        getTitle()
    }

}


function displayResultTempest() {
    xml = loadXMLDoc("./xml/TheTempest.xml");
    xsl = loadXMLDoc("./xml/template.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
        new_index()
        getTitle()
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
        new_index()
        getTitle()
    }
}


function displayResultGentlemen() {
    xml = loadXMLDoc("./xml/TwoGentlemenOfVerona.xml");
    xsl = loadXMLDoc("./xml/template.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
        new_index()
        getTitle()
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
        new_index()
        getTitle()
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
    var bau = $("h2[class='act']")
    for (var i=0; i<bau.length; i++){
        $("#att").append("<p id='" + String(i+1) + "' onclick=jumpto('act_" + String(i+1) + "')>" + bau[i].innerText + "</p>")
        $("#att").append("<ul id='scene_" + String(i+1) + "'></ul>")
        var miao = $("[id*='a"+String(i+1)+"_s']");
        for (var y=0; y<miao.length; y++){
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
        
function jumpto(thediv){
    document.getElementById(thediv).scrollIntoView({behavior: 'smooth'});
}

function saveNewClass(){
    NewClass= $("#insert").val().toLowerCase().toString();
    sel = document.getSelection()
    Value = sel.toString();
    var ciao = Value.replaceAll("\n", "</br>");
    if ((NewClass == '') | (NewClass == null) | (Value == '') | (Value == null)) {
        // if one is empty string stop execution
        alert("Select a valid text to create the new class!")
    }
    else{  // download exising User classes
        UserClasses = JSON.parse(localStorage.getItem('UserClasses'))
        // if new class --> create empty list of values
        if ((NewClass in UserClasses)==0){
            UserClasses[NewClass] = []
        } 
        // append new value
        UserClasses[NewClass].push(Value);
        // upload updated User classes
        localStorage.setItem('UserClasses', JSON.stringify(UserClasses));
        // update formcheck list
        updateformcheckList(Object.keys(UserClasses));
        // insert tag for selection
        var spn = document.createElement('span')
        spn.innerHTML = ciao;
        spn.classList.add(NewClass);
        spn.classList.add("myspan");
        range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(spn);

        //to handle multiple selections for the same class
        for (c in UserClasses){
            if (NewClass === c){
                if($('#'+NewClass).is(":checked")){
                    spn.classList.add('userclassSelected');
                }
            }
        }

    }
}

function updateformcheckList(lista){
    elementipresentiJQ = $("#formchecks").children(".form-check")
    elementipresenti = []
    for (var i=0; i<elementipresentiJQ.length; i++){
        elementipresenti.push($(elementipresentiJQ[i].firstChild).val())
    }
    for (let ele of lista){
        if (elementipresenti.indexOf(ele)==-1){
            $("#formchecks").append("<div class='form-check'><input class='form-check-input' type='checkbox' value='" + ele + "' id='"+ele+"' /><label class='form-check-label'>" + ele + "</label></div>")
            $("#formchecks").find(".form-check-input[value='" + ele + "']").click(function () {
                if (this.checked) {
                    $('.'+ele).addClass('userclassSelected')
                }
                else {
                    $('.'+ele).removeClass('userclassSelected')
                }
                }
            )
        }
    }}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
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
