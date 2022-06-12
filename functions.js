var UserClasses_init = {}
localStorage.setItem('UserClasses', JSON.stringify(UserClasses_init))

$(document).ready(main);

function main() {

    $('#showAct').click(function () {
        if (this.checked)
            $('.act').addClass('acts')
        else
            $('.act').removeClass('acts')
    })

    $('#showScenes').click(function () {
        if (this.checked)
            $('.scene').addClass('scenes')
        else
            $('.scene').removeClass('scenes')
    })

    $('#showPeople').click(function () {
        if (this.checked)
            $('.person').addClass('people')
        else
            $('.person').removeClass('people')
    })

    $('#showActions').click(function () {
        if (this.checked)
            $('.actions').addClass('stage')
        else
            $('.actions').removeClass('stage')
    })

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
    xml = loadXMLDoc("TheComedyOfErrors.xml");
    xsl = loadXMLDoc("TheComedyOfErrors.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
    }
}


function displayResultTempest() {
    xml = loadXMLDoc("TheTempest.xml");
    xsl = loadXMLDoc("TheTempest.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
    }
}


function displayResultGentlemen() {
    xml = loadXMLDoc("TwoGentlemenOfVerona.xml");
    xsl = loadXMLDoc("TwoGentlemenOfVerona.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        reset()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
        new_index()
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
        new_index()
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

/* function index(){
    for (var i=1; i<=5; i++) {
        var test = $("<h2>[class='act'[id='act_" + i + "']]").val();
        $("#att").append("<li>" + test + "</li>")
}
} */
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
        

function jumpto(thediv){
    document.getElementById(thediv).scrollIntoView()
}

function saveNewClass(){
    NewClass= $("#insert").val().toLowerCase();
    sel = document.getSelection()
    // firstP = getSelectedNode()
    Value = sel.toString();
    if ((NewClass == '') | (NewClass == null) | (Value == '') | (Value == null)) {
        // if one is empty string stop execution
        return
    }
    // download exising User classes
    UserClasses = JSON.parse(localStorage.getItem('UserClasses'))
    // if new class --> create empty list of values
    if ((NewClass in UserClasses)==0){
        UserClasses[NewClass] = []
    }
    // append new value
    UserClasses[NewClass].push(Value)
    // upload updated User classes
    localStorage.setItem('UserClasses', JSON.stringify(UserClasses))
    // update formcheck list
    updateformcheckList(Object.keys(UserClasses))
    // insert tag for selection
    var spn = document.createElement('SPAN');
    spn.textContent = Value;
    spn.classList.add(NewClass);
    range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(spn);
    //firstP.append(spn)
}

function updateformcheckList(lista){
    elementipresentiJQ = $("#formchecks").children(".form-check")
    elementipresenti = []
    for (var i=0; i<elementipresentiJQ.length; i++){
        elementipresenti.push(elementipresentiJQ[i].innerText)
    }
    for (ele of lista){
        if (elementipresenti.indexOf(ele)==-1){
            $("#formchecks").append("<div class='form-check'><input class='form-check-input' type='checkbox' value='" + ele + "' id='showAct'/><label class='form-check-label' for='showAct'>" + ele + "</label></div>")
            $("#formchecks").find(".form-check-input[value='" + ele + "']").click(function () {
                if (this.checked)
                    $('.'+ele).addClass('userclassSelected')
                else
                    $('.'+ele).removeClass('userclassSelected')
            })
        }
    }
}


// function getSelectedNode()
// {
//     if (document.selection)
//         return document.selection.createRange().parentElement();
//     else
//     {
//         var selection = window.getSelection();
//         if (selection.rangeCount > 0)
//             return selection.getRangeAt(0).startContainer.parentNode;
//     }
// }