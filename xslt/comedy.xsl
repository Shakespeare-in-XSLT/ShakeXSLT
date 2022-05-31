<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="html"/>
    <xsl:template match="tei:TEI">
        <html>
            <head>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <div>
                    <xsl:apply-templates select="tei:teiHeader"/>
                </div>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="tei:teiHeader">
        <xsl:apply-templates select="tei:fileDesc"/>
    </xsl:template>
    <xsl:template match="tei:fileDesc">
        <xsl:apply-templates select="tei:titleStmt"/>
    </xsl:template>
    <xsl:template match="tei:titleStmt">
        <xsl:value-of select="tei:title"/>
    </xsl:template>
 
</xsl:stylesheet>
