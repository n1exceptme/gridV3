/*
* Store per l'anagrafica complessiva della fornitura
*/

Ext.define('ExtPOD.store.Forniture', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Fornitura',
    pageSize: 30,
    autoLoad: {start: 0, limit: 30},
	remoteSort:true,
	simpleSortMode:true,
    sorters : {
        property : 'pod',
        direction : 'ASC'
    },

/* 	remoteFilter: true,
	//Parameter name to send filtering information in
     filters: [{
		property: '',
        value: '' 
    }],

	// The PHP script just use query=<whatever>
	encodeFilters: function(filters) {
		return filters[0].value;
	},		 */	
	
    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaForniture.php',
			create: 'php/nuovaFornitura.php', 
            update: 'php/aggiornaFornitura.php',
            destroy: 'php/eliminaFornitura.php'
        },
/*  		extraParams:{
			task: "LISTING"
		}, */
        reader: {
            type: 'json',
            root: 'forniture',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'forniture'
        }
    }
});