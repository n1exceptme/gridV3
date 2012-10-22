/*
* Modello dei dati i consumi
*/

Ext.define('ExtPOD.model.Consumo', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'id',type: 'int'},
			{name: 'pod',type: 'string'},
			{name: 'consumi',type: 'float'},
			{name: 'mese',type: 'int'},
			{name: 'anno',type: 'int'},
			{name: 'data',type: 'date'}
	]
});