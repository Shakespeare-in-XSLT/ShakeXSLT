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
                <meta charset="UTF_8"/>
                <title match="/TEI/teiHeader/fileDesc/titleStmt/title"/>
            </head>
            <body>
                <div class="container">
                    <xsl:apply-templates select="//tei:title"/>
                    <xsl:apply-templates select="//tei:div/tei:p"/>
                </div>
                <div>
                    <xsl:apply-templates/>
                    <xsl:value-of select="//tei:publicationStmt/tei:p"/>
                </div>
            </body>      
        </html>
    </xsl:template>
     
    <xsl:template match="//tei:teiHeader"/>
    
    <xsl:template match="//tei:title">
        <h1>
            <xsl:apply-templates/>
        </h1>
    </xsl:template>
    
    <xsl:template match="//tei:head">
        <h2>
            <xsl:apply-templates/>
        </h2>
    </xsl:template>
    
    <xsl:template match="//tei:castList">
        <table border="1" cell-padding="2">
           <tr>
               <th>Actor</th>
               <th>Role</th>
           </tr>    
            <xsl:for-each select="tei:castGroup/tei:castItem">
                    <tr>
                    <td>     
                       <xsl:value-of select="tei:role/tei:name"/> 
                    </td>
                    <td><xsl:value-of select="tei:roleDesc"/></td>
                    </tr>               
            </xsl:for-each>
            
        </table>
    </xsl:template>
    
    <xsl:template match="//tei:speaker">
        <h3>
            <xsl:apply-templates/>
        </h3>
    </xsl:template>
    
    <xsl:template match="tei:l">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>        
    
    <xsl:template match="//tei:lb">
        <xsl:apply-templates/><br/>
    </xsl:template>
    
    <xsl:template match="tei:role">
        <h3><xsl:apply-templates/></h3>
    </xsl:template>
    
    <xsl:template match="tei:roleDesc">
        <p><xsl:apply-templates/></p>
    </xsl:template>
       
    <xsl:template match="//tei:hi">
        <xsl:choose>
            <xsl:when test="@rend='italic'">
                <i>
                    <xsl:apply-templates/>
                </i>                
            </xsl:when>
            <xsl:otherwise>
                <sup>
                    <xsl:apply-templates/>
                </sup>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
   
</xsl:stylesheet>

   <!-- <xsl:template match="tei:TEI">
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
    
    <xsl:template match="//tei:teiHeader"/>
    
    <xsl:template match="//tei:head">
        <h1>
            <xsl:apply-templates/>
        </h1>
    </xsl:template>

        <xsl:apply-templates select="tei:fileDesc"/>

    </xsl:template>
    <xsl:template match="tei:fileDesc">
        <xsl:apply-templates select="tei:titleStmt"/>
    </xsl:template>
    <xsl:template match="tei:titleStmt">
        <xsl:value-of select="tei:title"/>
    </xsl:template>
    </xsl:template>

</xsl:stylesheet> -->
