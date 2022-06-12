$(document).ready(main);

		function main() {
			
			$('#showAct').click(function() {
				if (this.checked) 
					$('.act').addClass('acts')
				else
					$('.act').removeClass('acts')
			})
			
			$('#showScenes').click(function() {
				if (this.checked) 
					$('.scene').addClass('scenes')
				else
					$('.scene').removeClass('scenes')
			})
			
			$('#showPeople').click(function() {
				if (this.checked) 
					$('.person').addClass('people')
				else
					$('.person').removeClass('people')
			})
			
			$('#showActions').click(function() {
				if (this.checked) 
					$('.actions').addClass('stage')
				else
					$('.actions').removeClass('stage')
			})
			};

			function loadXMLDoc(filename)
            {
                if (window.ActiveXObject)
                    {
                        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
                    }
                    else
                    {
                        xhttp = new XMLHttpRequest();
                    }
                    xhttp.open("GET", filename, false);
                    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
                    xhttp.send("");
                    return xhttp.responseXML;
            }

                function displayResult()
                {
                    xml = loadXMLDoc("TheComedyOfErrors.xml");
                    xsl = loadXMLDoc("TheComedyOfErrors.xsl");
                    // code for IE
                    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
                    {
                        ex = xml.transformNode(xsl);
                        document.getElementById("example").innerHTML = ex;
                    }
                // code for Chrome, Firefox, Opera, etc.
                    else if (document.implementation && document.implementation.createDocument)
                    {
                        xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        resultDocument = xsltProcessor.transformToFragment(xml, document);
                        document.getElementById("example").appendChild(resultDocument);
                    }
                }