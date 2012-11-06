<?php
	//include la configurazione per la connessione al DBMS
	include("connetti.php");

    if (isset($_GET['sort'])) {
		$sorters = ($_GET['sort']);
		$sorters = (json_decode($sorters));

		foreach ($sorters as $sort) {
				$sortField = $sort->property;
				$sortOrder = $sort->direction;
		};
		
		$queryString = "SELECT * FROM consumi6 ORDER BY `pod`, `numero_fiscale`, `anno_riferimento`, `mese_riferimento`";
	}
	else {
		$queryString = "SELECT * FROM consumi6 ORDER BY `pod`, `numero_fiscale`, `anno_riferimento`, `mese_riferimento`";
	}
	
	//esegui la query sql
	$query = mysql_query($queryString) or die(mysql_error());

	//il ciclo crea un array contenente i record estratti dal db
	$consumi = array();
	while($consumo = mysql_fetch_assoc($query)) {
	    $consumi[] = $consumo;
	}

	//rileva il "numero" di record contenuti nel db
	$queryTotal = mysql_query('SELECT count(*) as num FROM consumi6') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//codifica i dati in formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"consumi" => $consumi
	));
?>