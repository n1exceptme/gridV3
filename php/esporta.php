<h1>Test Driving MySqlExcelBuilder</h1>
<?php
	//include la configurazione per la connessione al DBMS
	include("connetti.php");
	require_once('MySqlExcelBuilder.php');

	echo $_SESSION['selezione'];
	
	$database = 'pod';
	$user='root';
	$pwd='zinedine21';

	$mysql_xls = new MySqlExcelBuilder($database,$user,$pwd);

	$queryString = $_GET[$_SESSION['selezione']];

	
	
	if(isset($_REQUEST['id'])) {
		$query = $_REQUEST['id'];
	};
	
	echo $queryString;
	echo $_GET[$_SESSION['selezione']];
	
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
	echo "<a href=\"./php/$fname\"> Download $fname</a>";
	echo $_SESSION['selezione'];
?>