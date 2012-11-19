<?php
	//include la configurazione per la connessione al DBMS
	include("connetti.php");
	require_once('MySqlExcelBuilder.php');

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];
	
	$task = '';
	
	if(isset($_REQUEST['task'])) {
		$task = $_REQUEST['task'];
	}	
	
    if (isset($_GET['sort'])) {
		$sorters = ($_GET['sort']);
		$sorters = (json_decode($sorters));

		foreach ($sorters as $sort) {
				$sortField = $sort->property;
				$sortOrder = $sort->direction;
		};
	}
	
	if (isset($_GET['filter'])) {
		$filter = ($_GET['filter']);
		$filtro = (json_decode($filter));

	foreach ($filtro as $f)
	{
		$filterField = $f->property;
		print_r($filterField);
		$filterValue = $f->value;
		print_r($filterValue);
	};
	}	

	if(isset($_REQUEST['esporta'])) {
		$esporta = $_REQUEST['esporta'];
		if ($esporta == "Y") {
			$database = 'pod';
			$user='root';
			$pwd='zinedine21';
			$mysql_xls = new MySqlExcelBuilder($database,$user,$pwd);
			$queryString = "SELECT * FROM anagrafica6 ORDER BY $sortField $sortOrder LIMIT $start,  $limit";
			$mysql_xls->add_page('POD',$queryString,'potenza','B',2);
			$phpExcel = $mysql_xls->getExcel(); // This needs to come after all the pages have been added.
			$phpExcel->setActiveSheetIndex(0); // Set the sheet to the first page.
			// Do some addtional formatting using PHPExcel
			$sheet = $phpExcel->getActiveSheet();
			$date = date('Y-m-d');
			$cellKey = "A1"; 
			$sheet->setCellValue($cellKey,"Anagrafica POD aggiornata al $date");
			$style = $sheet->getStyle($cellKey);                              
			$style->getFont()->setBold(true);
			
			$objWriter = PHPExcel_IOFactory::createWriter($phpExcel, 'Excel2007'); // 'Excel5' is the oldest format and can be read by old programs.
			$fname = "Anagrafica.xlsx";
			$objWriter->save($fname);
			//echo "<a href=\"$fname\"> Download $fname</a>";
			//echo "<script type='text/javascript'>alert('{$fname}');
			//</script>";
		}	
	}
	
	switch($task) {
		case "LISTING":
			$queryString = "SELECT * FROM anagrafica6 
						ORDER BY $sortField $sortOrder 
						LIMIT $start,  $limit";
		break;
		
		case "SEARCH":
			$queryString = "SELECT * FROM anagrafica6 WHERE $filterField LIKE '%".$filterValue."%'".
							" ORDER BY $sortField $sortOrder LIMIT $start, $limit";
		break;
		
		default:
			$queryString = "SELECT * FROM anagrafica6 ORDER BY $sortField $sortOrder LIMIT $start,  $limit";
			$_SESSION['selezione'] = $queryString;
			//echo $_SESSION['selezione'];
		break;
	}

	//esegui la query sql
	$query = mysql_query($queryString) or die(mysql_error());

	//il ciclo crea un array contenente i record estratti dal db
	$forniture = array();
	while($fornitura = mysql_fetch_assoc($query)) {
	    $forniture[] = $fornitura;
	}

	//rileva il "numero" di record contenuti nel db
	$queryTotal = mysql_query('SELECT count(*) as num FROM anagrafica6') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//codifica i dati in formato JSON
	
	// echo json_encode(array(
		// "success" => mysql_errno() == 0,
		// "total" => $total,
		// "query" => $queryString,
		// "forniture" => $forniture
	// ));
	
	$info = date('Y-m-d H:i:s', time()) . " - " . $queryString . "\n";
	$log = fopen ('LOG.log', 'a') or die("can't open file");
	fwrite($log, $info );
	fclose($log);
	//echo $_SESSION['selezione'];
?>