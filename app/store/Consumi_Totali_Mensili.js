/*
* Store per i consumi fatturati
*/

Ext.define('ExtPOD.store.Consumi_Totali_Mensili', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Consumo_Totale_Mensile',

	autoLoad: true,
	pageSize: 100,
	
    remoteSort:true,
	remoteFilter: true,
	simpleSortMode:true,
	sorters : {
        property : 'data_consumi',
        direction : 'ASC'
    },
	
	groupField: 'anno_consumi',

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elenca_Consumi_Totali_Mensili.php'
        },

        reader: {
            type: 'json',
            root: 'consumi_totali_mensili',
            successProperty: 'success'
        }
    }
});