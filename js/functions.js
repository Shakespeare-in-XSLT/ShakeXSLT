// create dictionary with userclasses
var UserClasses_init = {}
// transform it in JSON object and save it into localStorage
localStorage.setItem('UserClasses', JSON.stringify(UserClasses_init))

$(document).ready(main);

function main() {

    $('#showAct').click(function () {
        if (this.checked){
            $('.act').addClass('acts')
            }
        else
            $('.act').removeClass('acts')
    })

    $('#showScenes').click(function () {
        if (this.checked){
            $('.scene').addClass('scenes')
            }
        else
            $('.scene').removeClass('scenes')
    })

    $('#showPeople').click(function () {
        if (this.checked){
            $('.person').addClass('people')
        }
        else
            $('.person').removeClass('people')
    
    }
    )

    $('#showActions').click(function () {
        if (this.checked){
            $('.actions').addClass('stage')}
        else
            $('.actions').removeClass('stage')
    
    }
    )
    
    // reads params from query in url and calls function to upload text   
    parametri = getParams(document.URL)
    if (parametri['ConttoLoad'] == 'Errors') {
        displayResult("./xml/TheComedyOfErrors.xml", "./xml/template.xsl");
    }
    else if (parametri['ConttoLoad'] == 'Tempest'){
        displayResult("./xml/TheTempest.xml", "./xml/template.xsl");
    }
    else if (parametri['ConttoLoad'] == 'Gentlemen'){
        displayResult("./xml/TwoGentlemenOfVerona.xml", "./xml/template.xsl");   
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
        alert('Hey you! Flip your device to surf the metadata!')}
    // check if user from desktop with smaller window
    else {
        if(window.matchMedia("(max-width: 600px)").matches){
        alert ('Hey you! Maximize a little your browser window to surf the metadata!')
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

function saveNewClass(){
    // instantiate a new variable corresponding to the input of the user
    NewClass= $("#insert").val().toLowerCase().toString();
    // save the selection of the document and transform it to string
    sel = document.getSelection()
    Value = sel.toString();
    // preserving whitespacing
    var ciao = Value.replaceAll("\n", "</br>");
    // if NewClass or Value is empty string stop execution
    if ((NewClass == '') | (NewClass == null) | (Value == '') | (Value == null)) {
        alert("Select a valid text to create the new class!")
    }
    else{  // download exising User classes
        UserClasses = JSON.parse(localStorage.getItem('UserClasses'))
        // if NewClass is not in Userclasses --> create empty list of values
        if ((NewClass in UserClasses)==0){
            UserClasses[NewClass] = []
        } 
        // append new value to UserClasses
        UserClasses[NewClass].push(Value);
        // save updated UserClasses
        localStorage.setItem('UserClasses', JSON.stringify(UserClasses));
        // update formcheck list
        updateformcheckList(Object.keys(UserClasses));
        // create tag for selected text
        var spn = document.createElement('span')
        spn.innerHTML = ciao;
        //add class NewClass and "myspan" to element
        spn.classList.add(NewClass);
        spn.classList.add("myspan");
        // var range containing the starting range of the selection
        range = sel.getRangeAt(0);
        // clear the document content at that range
        range.deleteContents();
        // insert the new span node
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
    // save a list of checkbox present in the html and instantiate an empty list
    elementipresentiJQ = $("#formchecks").children(".form-check")
    elementipresenti = []
    // append the value of the label of every checkbox to empty list
    for (var i=0; i<elementipresentiJQ.length; i++){
        elementipresenti.push($(elementipresentiJQ[i].firstChild).val())
    }
    // for every element not present in the list, create a new checkbox
    for (let ele of lista){
        if (elementipresenti.indexOf(ele)==-1){
            $("#formchecks").append("<div class='form-check'><input class='form-check-input' type='checkbox' value='" + ele + "' id='"+ele+"' /><label class='form-check-label'>" + ele + "</label></div>")
            // on click --> function which checks if checbox is checked or not (adding a class and styling backgroud if yes, removing class otherwise)
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


//When the user clicks on the button, toggle between hiding and showing the dropdown content
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
