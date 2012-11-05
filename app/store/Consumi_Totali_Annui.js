/*
* Store per i consumi fatturati
*/

Ext.define('ExtPOD.store.Consumi_Totali_Annui', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Consumo_Totale_Annuo',

	autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elenca_Consumi_Totali_Annui.php'
        },

        reader: {
            type: 'json',
            root: 'consumi_totali_annui',
            successProperty: 'success'
        }
    }
});