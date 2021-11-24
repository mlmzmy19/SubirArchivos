<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>.::: Sistema de Gestión Electrónica / CONDUSEF - UNES :::.</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<%
session.removeValue("Log");
session.invalidate();


%>
<body>
<table align="center" width="820" height="580">
	<tr>
		<td valign="middle">
			<form  method="POST" id="logonForm" name="logonForm" action='../Manejador/servletusuario'>	
			<table  width="614" height="266" background="../img/Homelogin.jpg" align="center" cellpadding="0" cellspacing="0" border="0">
				<tr>
					<td width="68%">
						<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td width="100%" height="140">&nbsp;								</td>
							</tr>
							<tr>
							  <td><table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0">
										<tr height="30">
											<td width="62%" height="30"></td>
											<td width="38%" height="30">
												<input type="text" id="user"  name="user" tabindex="1" size="20">
											</td>
										</tr>
									</table>
							  </td>
							</tr>
							<tr>
								<td>
																
									<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0">
										<tr height="40">
											<td width="62%" height="30">
											</td>
											<td width="38%" height="20" valign="top">
												<input type="password" id="pass" name="pass" tabindex="2" size="20">
											</td>
										</tr>
									</table>
									
									
								</td>
							</tr>
					  </table>
					</td>
					<td width="32%" valign="bottom"><input name="image" type='image' src="../img/ir.gif" img><br>
					&nbsp;<br>&nbsp;</td>
				</tr>
			</table>
		</form>
		</td>
		
	</tr>
</table>
</body>
</html>
