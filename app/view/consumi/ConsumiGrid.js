Ext.define('ExtPOD.view.consumi.ConsumiGrid' ,{
    extend: 'Ext.ux.LiveFilterGridPanel',
    alias : 'widget.ConsumiGrid',

    requires: [
		'Ext.ux.LiveSearchGridPanel'
	],
	
	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Consumi',
    store: 'Consumi',
	
	verticalScrollerType: 'paginggridscroller',
	invalidateScrollerOnRefresh: false,
	
	width: 700,
	height: 500,	

	formatt_numeri_float: function(val) {
		if (val > 0) {
			return '<span style="color:blue;">' + val.toFixed(2) + '</span>';
		} else if (val <= 0) {
			return '<span style="color:red;">' + val.toFixed(2) + '</span>';
		}
		return val;
	},
	
	initComponent: function() {
		this.columns = 
					[
					{
					xtype: 'rownumberer',
					width: 35,
					align: 'left',
					locked: true,
					sortable: false
					},
					{
					text: 'POD', 
					dataIndex: 'pod',   
					width:110, 
					align:'center',
					editor: 'textfield',
					sortable: true
					},
					{
					text: 'Fornitore', 
					dataIndex: 'fornitore',   
					width:110, 
					align:'center',
					editor: 'textfield',
					sortable: true
					},
					{
					text: 'Tipo di<br>documento', 
					dataIndex: 'tipo_documento',   
					width:110, 
					align:'center',
					editor: 'textfield',
					sortable: true
					},
					{
					text: 'Numero Fiscale', 
					dataIndex: 'numero_fiscale',   
					width:110, 
					align:'center',
					editor: 'textfield',
					sortable: true
					},							
					{
					text: 'Mese di<br>Riferimento', 
					dataIndex: 'mese_riferimento',  
					width:80, 
					align:'center', 
					sortable: true
					},
					{
					text: 'Anno di<br>Riferimento', 
					dataIndex: 'anno_riferimento',  
					width:80, 
					align:'center', 
					sortable: true
					},
					{
					text: 'Mese <br>Consumi', 
					dataIndex: 'mese_consumi',  
					width:80, 
					align:'center', 
					sortable: true
					},
					{
					text: 'Anno <br>Consumi', 
					dataIndex: 'anno_consumi',  
					width:80, 
					align:'center', 
					sortable: true
					},					
					{
					text: 'Data di<br>emissione', 
					dataIndex: 'data_emissione',  
					width:80, 
					align:'center', 
					sortable: true,
					renderer: Ext.util.Format.dateRenderer('d/m/Y')
					},
					{ text: 'Totale Fattura<br>Netto',
					 dataIndex:'totale_fattura_netto',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo IVA',
					 dataIndex:'importo_iva',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Totale Fattura',
					 dataIndex:'totale_fattura',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo F1',
					 dataIndex:'consumo_f1',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo F2',
					 dataIndex:'consumo_f2',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo F3',
					 dataIndex:'consumo_f3',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo Fascia Peak',
					 dataIndex:'consumo_fascia_peak',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo Fascia Off Peak',
					 dataIndex:'consumo_fascia_off_peak',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Consumo F0',
					 dataIndex:'consumo_f0',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva F1',
					 dataIndex:'importo_totale_attiva_f1',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva F2',
					 dataIndex:'importo_totale_attiva_f2',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva F3',
					 dataIndex:'importo_totale_attiva_f3',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva Peak',
					 dataIndex:'importo_totale_attiva_peak',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva Off Peak',
					 dataIndex:'importo_totale_attiva_off_peak',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Attiva F0',
					 dataIndex:'importo_totale_attiva_f0',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Importo Totale<br>Reattiva',
					 dataIndex:'importo_totale_reattiva',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Totale Distribuzione',
					 dataIndex:'totale_distribuzione',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Totale Parte A',
					 dataIndex:'totale_parte_a',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Imposte Erariali',
					 dataIndex:'imposte_erariali',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},	

					{ text: 'Totale Dispacciamento',
					 dataIndex:'totale_dispacciamento',
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					}					
		];	
	
		this.listeners = [ {
				sortchange: function(){
					var grid = Ext.ComponentQuery.query('ConsumiGrid')[0];
					grid.getStore().load();
				}
				}];	
		
		this.dockedItems = [
			{
            xtype: 'toolbar',
            items: [

			]
			}

			];
		
		// trigger the data store load
		//ConsumiStore.guaranteeRange(0, 199);
		
		this.callParent(arguments);
	}
});