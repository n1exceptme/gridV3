/*
* Store per i consumi fatturati
*/

Ext.define('ExtPOD.store.Consumi_Fatturati', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Consumo_Fatturato',

	autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaConsumi_Fatturati.php',
			create: 'php/nuovoConsumo.php', 
            update: 'php/aggiornaConsumo.php',
            destroy: 'php/eliminaConsumo.php'
        },

        reader: {
            type: 'json',
            root: 'consumi_fatturati',
            successProperty: 'success'
        }
    }
});