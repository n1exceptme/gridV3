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
		
		$queryString = "SELECT * FROM consumi_fatturati ORDER BY `anno_consumi`, `mese_consumi`";
	}
	else {
		$queryString = "
				SELECT * 
				FROM `consumi_totali_annui_view`
				ORDER BY `anno_consumi` ASC";
	}
	
	//esegui la query sql
	$query = mysql_query($queryString) or die(mysql_error());

	//il ciclo crea un array contenente i record estratti dal db
	$consumi = array();
	while($consumo = mysql_fetch_assoc($query)) {
	    $consumi[] = $consumo;
	}

	//rileva il "numero" di record contenuti nel db
	$queryTotal = mysql_query('SELECT count(*) as num FROM consumi_totali_annui_view') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//codifica i dati in formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"consumi_totali_annui" => $consumi
	));
?>