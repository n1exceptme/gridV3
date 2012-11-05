/*
* Modello dei dati dei consumi fatturati
*/

Ext.define('ExtPOD.model.Consumo_Fatturato', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'anno_consumi',type: 'int'},
			{name: 'mese_consumi',type: 'int'},
			{name: 'consumi_totali',type: 'float'}
			]
});