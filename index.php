<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>GridV3 - Anagrafica, Consumi e Volture</title>

    <!-- ExtJS relativo	
	<link rel="stylesheet" type="text/css" href="../extjs/extjs/resources/css/ext-all-gray.css"/>
	<link rel="stylesheet" type="text/css" href="resources/css/app.css">
	<link rel="stylesheet" type="text/css" href="../ux/css/LiveSearchGridPanel.css" />
    <link rel="stylesheet" type="text/css" href="../ux/statusbar/css/statusbar.css" />	
	
	<script type="text/javascript" src="../extjs/extjs/ext-all.js"></script>
	-->
	
	
	<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all-gray.css"/>
	<link rel="stylesheet" type="text/css" href="resources/css/app.css">
	<link rel="stylesheet" type="text/css" href="../ux/css/LiveSearchGridPanel.css" />
    <link rel="stylesheet" type="text/css" href="../ux/statusbar/css/statusbar.css" />
    <link rel="stylesheet" type="text/css" href="../ux/grid/css/GridFilters.css" />
    <link rel="stylesheet" type="text/css" href="../ux/grid/css/RangeMenu.css" />		
	
	<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
	<script type="text/javascript" src="extjs/ext-lang-it.js"></script>
	
	
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	
	
    <!-- Example -->
    <script type="text/javascript" src="grid.js"></script>
	
	<?php
	session_start();
	$_SESSION['comune']= "Napoli"; 
	$_SESSION['selezione']	= "SELECT * FROM anagrafica6 LIMIT 0,10";
	?>   	
	
</head>

<body>
</body>
</html>