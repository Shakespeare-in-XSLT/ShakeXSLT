<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs" version="2.0">
    <xsl:output method="html"/>
    <xsl:template match="tei:TEI">
        <html>
            <head>
                <meta charset="UTF_8"/>
                <title>
                    <xsl:value-of select="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title"/>
                </title>
            </head>
            <body>
                <div>
                    <xsl:apply-templates select="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title"/>
                </div> 
                
                
               
                            <div id="openseadragon" style="width: 500px; height: 600px;"></div>
                            <script src="https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/openseadragon.min.js"></script>
                            <script type="text/javascript">
                                var viewer = OpenSeadragon({
                                id: "openseadragon",
                                prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
                                tileSources:   [{
                                "@context": "http://iiif.io/api/image/2/context.json",
                                "@id": "<xsl:value-of select="//tei:facsimile/tei:graphic/@url"/>",
                                "height": 8176,
                                "width": 6128,
                                "profile": [ "http://iiif.io/api/image/2/level2.json" ],
                                "protocol": "http://iiif.io/api/image",
                                "tiles": [{
                                "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
                                "width": 1024
                                }]
                                }]
                                });
                            </script>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title">
        <h1 id="titleiiif">
            <xsl:apply-templates/>
        </h1>
    </xsl:template>


</xsl:stylesheet>
