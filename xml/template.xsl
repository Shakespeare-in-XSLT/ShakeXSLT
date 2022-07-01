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
                <div>
                    <div id="cast-list">
                        <xsl:apply-templates select="tei:text/tei:front/tei:castList"/>
                    </div>
                    <div id="text">
                        <xsl:apply-templates select="tei:text/tei:body"/>
                    </div>
                </div>
                <div id="openseadragon" style="min-width: 800px; min-height: 600px;"></div>
                <div>
                 <script src="https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/openseadragon.min.js"></script>
                 <script type="text/javascript">
                     var viewer = OpenSeadragon({
                     id: "openseadragon",
                     prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/",
                     tileSources:   [{
                     "@context": "http://iiif.io/api/image/2/context.json",
                     "@id": "<xsl:value-of select="//tei:facsimile/tei:graphic/@url"/>",
                     "height": 5000,
                     "width": 4000,
                     "profile": [ "http://iiif.io/api/image/2/level2.json" ],
                     "protocol": "http://iiif.io/api/image",
                     "tiles": [{
                     "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
                     "width": 1024
                     }]
                     }]
                     });
                 </script>
               </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title">
        <h1 id="title">
            <xsl:apply-templates/>
        </h1>
    </xsl:template>
    <xsl:template match="tei:text/tei:front/tei:castList">
        <table>
            <tr>
                <th>Actor</th>
                <th>Role</th>
                <xsl:apply-templates select="tei:castGroup/tei:castItem"/>
            </tr>
        </table>
    </xsl:template>
    <xsl:template match="tei:text/tei:body">
        <div>
            <xsl:apply-templates select="tei:div[@type='act']"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:castGroup/tei:castItem">
        <tr>
            <td class="person">
                <xsl:value-of select="tei:role/tei:name"/>
            </td>
            <td class="role">
                <xsl:value-of select="tei:roleDesc"/>
            </td>
        </tr>
    </xsl:template>
    <xsl:template match="tei:speaker" name="person">
        <h3 class="person">
            <xsl:apply-templates/>
        </h3>
    </xsl:template>
    <xsl:template match="tei:div[@type = 'scene']/tei:head" name="scenes">
        <h2 class="scene">
            <xsl:attribute name="id">
                <xsl:value-of select="@xml:id"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </h2>
    </xsl:template>
    <xsl:template match="tei:div[@type = 'act']" name="acts">
        <h2 class="act">
            <xsl:attribute name="id">
                <xsl:value-of select="@xml:id"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </h2>
    </xsl:template>
    <xsl:template match="tei:l">
        <p class="line">
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    <xsl:template match="tei:hi">
        <xsl:choose>
            <xsl:when test="@rend = 'italic'">
                <p class="actions">
                    <i> 
                        <xsl:apply-templates/>
                    </i>
                </p>
            </xsl:when>
        </xsl:choose>
    </xsl:template> 
</xsl:stylesheet>
