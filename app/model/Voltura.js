/*
* Modello dei dati di volturazione
*/

Ext.define('ExtPOD.model.Voltura', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'id',type: 'int'},
			{name: 'pod',type: 'string'},
			{name: 'fornitore',type: 'string'},
			{name: 'data_inizio',type: 'date'},
			{name: 'data_fine',type: 'date'}
	]
});