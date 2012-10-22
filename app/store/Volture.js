/*
* Store per le volture
*/

Ext.define('ExtPOD.store.Volture', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Voltura',
    remoteSort:true,
	simpleSortMode:true,
	autoLoad: true,
    sorters : {
        property : 'pod',
        direction : 'ASC'
    },

	// allow the grid to interact with the paging scroller by buffering
	buffered: true,
	leadingBufferZone: 300,
	pageSize: 200,

    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaVolture.php',
			create: 'php/nuovaVoltura.php', 
            update: 'php/aggiornaVoltura.php',
            destroy: 'php/eliminaVoltura.php'
        },

        reader: {
            type: 'json',
            root: 'volture',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'volture'
        }
    }
});