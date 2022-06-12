<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs" version="2.0">
    <xsl:output method="html"/>
    <xsl:template match="tei:TEI">
        <html>
            <head>
                <meta charset="UTF_8"/>
                <!-- Bootstrap link-->
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossorigin="anonymous"/>
                <title>
                    <xsl:value-of select="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title"/>
                </title>
            </head>
            <body>
                <div class="container-fluid">
                    <div class="row">
                        <xsl:apply-templates
                            select="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title"/>
                    </div>
                    <div class="row clearfix">
                        <div id="box" class="col-md-6">
                            
                            <div class="row clearfix p-4">
                                <xsl:apply-templates select="tei:text/tei:front/tei:castList"/>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div id="text">
                                <xsl:apply-templates select="tei:text/tei:body"/>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="tei:teiHeader"/>
    <xsl:template match="tei:teiHeader/tei:fileDesc/tei:titleStmt/tei:title">
        <h1 id="title">
            <xsl:apply-templates/>
        </h1>
    </xsl:template>
    <xsl:template match="tei:text/tei:front/tei:castList">
        <table border="1" cell-padding="2">
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
            <xsl:apply-templates/><br/>
    </xsl:template>
    <xsl:template match="tei:lb">
        <xsl:apply-templates/>
        <br/>
    </xsl:template>
    <xsl:template match="tei:hi">
        <xsl:choose>
            <xsl:when test="@rend = 'italic'">
                <span class="actions">
                    <i> 
                        <xsl:apply-templates/>
                    </i>
                </span>
            </xsl:when>
        </xsl:choose>
    </xsl:template> 
</xsl:stylesheet>
