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
        index()
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument) {
        reset()
        index()
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("example").appendChild(resultDocument);
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

function index(){
    for (var i=1; i<=5; i++) {
        var test = $("<h2>[class='act'][id='id_" + i + "']").val();
        $("#att").append("<li>" + test + "</li>")
}
}