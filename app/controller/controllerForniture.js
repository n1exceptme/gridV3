Ext.MessageBox = Ext.Msg = Ext.create('Ext.window.MessageBox', {
    buttonText: {
        ok     : 'OK',
        yes    : 'Sì',
        no     : 'No',
        cancel : 'Annulla'
    }
});

Ext.define('ExtPOD.controller.ControllerForniture', {
    extend: 'Ext.app.Controller',

    stores: [
			'Forniture',
			'Consumi',
			'Volture',
			'Consumi_Totali_Mensili',
			'Consumi_Totali_Annui'
			],

    models: [
			'Fornitura',
			'Consumo',
			'Voltura',
			'Consumo_Totale_Mensile',
			'Consumo_Totale_Annuo'
			],

    views: [
		'fornitura.EditForm', 
		'fornitura.FornitureGrid',
		'consumi.ConsumiGrid',
		'consumi.Consumi_Totali_Mensili_Grid',
		'consumi.Consumi_Totali_Annui_Grid',
		'volture.VoltureGrid',
		'fornitura.Scheda',
		'chart.ConsumiBar',
		'chart.ConsumiLine',
		'chart.Consumi_Totali_Mensili_Chart',
		'chart.Consumi_Totali_Annui_Chart'
		],

    refs: [
		{
            ref: 'scheda',
            selector: 'form'
        },
		{
            ref: 'FornitureGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
		
			'ConsumiBar': {
                afterrender: function (chart,o) {
                    var series = chart.series.getAt(0);
                    series.listeners = {
                        itemmouseup: function(item) {                            
                           
                            var series = Ext.ComponentQuery.query('ConsumiBar')[0].series.get(0);
                            var index = Ext.Array.indexOf(series.items, item);
                            var selectionModel = Ext.ComponentQuery.query('FornitureGrid')[0].getSelectionModel();
                     
                            var selectedStoreItem = item.storeItem;
                            selectionModel.select(index);
                        }
                    }
                },
                beforerefresh: this.beforerefresh
            },
			
            'FornitureGrid dataview': {
                itemdblclick: this.modificaFornitura
            },
			'FornitureGrid': {
        		selectionchange: this.gridSelectionChange,
                viewready: this.onViewReady
			},
            'FornitureGrid button[action=add]': {
            	click: this.modificaFornitura
            },
            'FornitureGrid button[action=edit]': {
            	click: this.modificaFornitura
            },			
            'FornitureGrid button[action=delete]': {
                click: this.eliminaFornitura
            }, 
            'FornitureGrid button[action=showchart]': {
                toggle: this.mostraGrafico
            },			
            'FornitureGrid button[action=cerca]': {
                click: this.cercaFornitura
            },	
            'FornitureGrid button[action=resetsearch]': {
                click: this.resetcercaFornitura
            },			
            'EditForm button[action=save]': {
                click: this.aggiornaFornitura
            }
        });
    },

    modificaFornitura: function(grid, record) {
        var edit = Ext.create('ExtPOD.view.fornitura.EditForm').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
	
	resetcercaFornitura: function(button) {
			var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
			var store = grid.getStore();
			Ext.getCmp("searchvalue").reset();
			Ext.getCmp("searchfield").reset();
			store.clearFilter(true);
			store.getProxy().extraParams.task = 'LISTING';
	},

	cercaFornitura: function(button) {
			var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
			var store = grid.getStore();
			store.clearFilter(true);
			store.loadPage(1);
			var searchValue = Ext.getCmp("searchvalue").getValue();
			var searchField = Ext.getCmp("searchfield").getValue();
			store.getProxy().extraParams.task = 'SEARCH';
			store.filter(searchField, searchValue);
			store.loadPage(1);
			grid.getView().refresh();
	},
    
    aggiornaFornitura: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var nuovo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('ExtPOD.model.Fornitura');
			record.set(values);
			this.getFornitureStore().add(record);
            nuovo = true;
		}
        
		win.close();
        this.getFornitureStore().sync();

        if (nuovo){ //faz reload para atualziar
            this.getStore().load();
        }
    },
    
    eliminaFornitura: function(button) {
    	
    	var grid = this.getFornitureGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getFornitureStore();
		
		Ext.Msg.confirm('Attenzione!', 'Eliminare la fornitura?', function(button) {
			if (button === 'yes') {
				Ext.Msg.alert('Conferma', 'POD eliminato dal database.');
				store.remove(record);
				store.sync();
				store.load();
			} else {
				store.sync();
			}
		});
	
    },
	
	localizzaFornitura: function(button) {
/* 		var mapwin;
		if (!mapwin) {
			mapwin = Ext.create('Ext.window.Window', {
                autoShow: true,
                layout: 'fit',
                title: 'Google Maps',
                closeAction: 'hide',
                width:450,
                height:450,
                border: false,
                x: 40,
                y: 60,
                items: {
                    xtype: 'gmappanel',
                    center: {
                        geoCodeAddr: '38 Via Nuova Brecce, 80147 Napoli',
                        marker: {title: 'Sede Citelum'}
                    }
                }
            });
		} */
    },
	
    beforerefresh: function() {
        var timer = false;

        return function() {
            clearTimeout(timer);

            var series = Ext.ComponentQuery.query('ConsumiBar')[0].series.get(0);
            var index = Ext.Array.indexOf(series.items, item);
            var selectionModel = Ext.ComponentQuery.query('FornitureGrid')[0].getSelectionModel();
            var selectedStoreItem = item.storeItem; 

            if (selectedStoreItem) {
                timer = setTimeout(function() {
                    this.selectItem(selectedStoreItem);
                }, 900);
            }
        };
    },

    gridSelectionChange: function(model, records) {
        if (records[0]) {
             this.getScheda().getForm().loadRecord(records[0]);
        }
    },
	
	mostraGrafico: function(button, pressed) {
		if (pressed) {
        Ext.getCmp('chartpanel').show();
		button.setText('Nascondi Grafici');
		} else {
		button.setText('Mostra Grafici');
		Ext.getCmp('chartpanel').hide();
		}
    },
    
    onViewReady: function(grid) {
        grid.getSelectionModel().select(0);
    }   
	
});
