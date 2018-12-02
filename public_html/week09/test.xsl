<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="@*|node()">
		<xsl:copy>
			<xsl:apply-templates select="@*|node()"/>
		</xsl:copy>
	</xsl:template>

<xsl:template match="/">
		<html>
			<header>
				<h2>Ponder 09 : Adam Shumway</h2>
				<style>
					th, td{border:1px solid black;}
				</style>
			</header>
			<body>
				<table>
					<tr>
						<th><xsl:apply-templates select="bsa/council"/></th>
					</tr>
					<xsl:for-each select="bsa/council/troop">
					<tr>
						<th>Troop
							<xsl:text>&#160;</xsl:text>
							<xsl:value-of select="@number" />
							<xsl:text>&#160;</xsl:text>-<xsl:text>&#160;</xsl:text>
							<xsl:value-of select="@name"/>
						</th>
					</tr>
					<tr>
						<th>Scout</th>
					</tr>
					<xsl:for-each select="scout">
						<tr>
							<td>
								<xsl:value-of select="concat(fname,' ',lname)"/>
							</td>
							<td><xsl:value-of select="phone"/></td>
							<td><xsl:value-of select="address/."/></td>
						</tr>
						<tr>
							<th>Rank</th>
							<th></th>
							<th>Merit Badges</th>
						</tr>
						<xsl:for-each select="rank">
						<tr>
							<td><xsl:value-of select="@date-earned"/></td>
							<td><xsl:value-of select="@srank"/></td>
						</tr>
						</xsl:for-each>
					</xsl:for-each>
				</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="bsa/council">
			<xsl:value-of select="@name" />
	</xsl:template>

	<xsl:template match="scout/rank">
		<xsl:value-of select="@srank"/>
	</xsl:template>

</xsl:stylesheet>