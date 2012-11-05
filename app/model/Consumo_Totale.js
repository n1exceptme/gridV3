/*
* Modello dei dati dei consumi fatturati
*/

Ext.define('ExtPOD.model.Consumo_Totale', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'data_consumi',type: 'date'},
			{name: 'anno_consumi',type: 'int'},
			{name: 'mese_consumi',type: 'int'},
			{name: 'consumi_teorici',type: 'float'},
			{name: 'letture',type: 'float'},
			{name: 'telecontrollo',type: 'float'},
			{name: 'consumi_fatturati',type: 'float'}
			]
});