/*
* Modello dei dati dei consumi fatturati
*/

Ext.define('ExtPOD.model.Consumo_Totale_Annuo', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'anno_consumi',type: 'int'},
			{name: 'consumi_teorici_annui',type: 'float'},
			{name: 'letture_annue',type: 'float'},
			{name: 'telecontrollo_annuo',type: 'float'},
			{name: 'consumi_fatturati_annui',type: 'float'}
			]
});