/*
* Modello dei dati per l'anagrafica della fornitura
*/

Ext.define('ExtPOD.model.Fornitura', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'cavo',type: 'string'},
			{name: 'pod',type: 'string'},
			{name: 'codice_cliente',type: 'string'},
			{name: 'particella',type: 'string'},
			{name: 'toponimo',type: 'string'},
			{name: 'ncivico',type: 'string'},
			{name: 'comune',type: 'string'},
			{name: 'prov',type: 'string'},
			{name: 'posizione',type: 'string'},
			{name: 'lettura',type: 'string'},
			{name: 'accensione',type: 'string'},
			{name: 'valore_tensione',type: 'int'},
			{name: 'consegna',type: 'string'},
			{name: 'contatore_elettrico',type: 'string'},
			{name: 'note',type: 'string'},
			{name: 'punti_luce',type: 'int'},
			{name: 'potenza',type: 'float'},
			{name: 'total', type: 'int'}
	]
});