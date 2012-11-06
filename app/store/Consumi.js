/*
* Store per i consumi
*/

Ext.define('ExtPOD.store.Consumi', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Consumo',
    remoteSort:true,
	simpleSortMode:true,
	autoLoad: true,
    sorters : {
        property : 'id',
        direction : 'ASC'
    },

	// allow the grid to interact with the paging scroller by buffering
	buffered: true,
	leadingBufferZone: 50,
	trailingBufferZone: 50,
	pageSize: 200,

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaConsumi.php',
			create: 'php/nuovoConsumo.php', 
            update: 'php/aggiornaConsumo.php',
            destroy: 'php/eliminaConsumo.php'
        },

        reader: {
            type: 'json',
            root: 'consumi',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'consumi'
        }
    }
});