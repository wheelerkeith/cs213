<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
	
		<html>
		<style>
			html {
				background-color: #3399ff;
			}
			
			body {
				background-color: #99ccff;
			}
			table {
				border-collapse: collapse;
				width: 100%
			}
			
			p {
				font-size: 24px;
				font-weight: bold;
			}
			
			th {
				border: solid 1px;
				padding: 20px;
				font-size: 24px;
			}
			
			td {
				text-align: center;
				border: solid 1px;
				font-size: 14px;
			}
			
			#rank, #badge {
				font-size: 20px;
			}
		</style>
		
			<header>
				<h1>Week 09: Keith Wheeler</h1>
			</header>
			<body>
				<xsl:for-each select="bsa/council">
					<p>Council: <xsl:value-of select="name" /></p>
					<xsl:for-each select="troop">
						<p>Troop: <xsl:value-of select="name" /></p>
						<table>
							<xsl:for-each select="scout">
								<tr id="scout">
									<th>Scout Name</th>
									<th>Address</th>
									<th>Phone</th>
								</tr>
									<tr>
										<td><xsl:value-of select="concat(firstName,' ', lastName)" /></td>
										<td><xsl:value-of select="address" /></td>
										<td><xsl:value-of select="phone" /></td>
									</tr>
								<tr>
									<th id="rank">Rank</th>
									<th id="rank">Date Earned</th>
								</tr>
									<xsl:for-each select="rank">
										<tr>
											<td><xsl:value-of select="name" /></td>
											<td><xsl:value-of select="date-earned" /></td>
										</tr>
									</xsl:for-each>
								<tr>
									<th id="badge">Badge</th>
									<th id="badge">Date Earned</th>
								</tr>
									<xsl:for-each select="meritBadge">
										<tr>
											<td><xsl:value-of select="name" /></td>
											<td><xsl:value-of select="date-earned" /></td>
										</tr>
									</xsl:for-each>
							</xsl:for-each>
						</table>
					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	
	</xsl:template>

</xsl:stylesheet>