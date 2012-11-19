//var sm = Ext.create('Ext.selection.CheckboxModel');

Ext.define('ExtPOD.view.fornitura.FornitureGrid' ,{
    extend: 'Ext.ux.LiveFilterGridPanel',
    alias : 'widget.FornitureGrid',
    
	//selModel: sm,
	
    requires: [
		//'Ext.toolbar.Paging',
		//'Ext.ux.PagingToolbarResizer',
		'Ext.ux.LiveSearchGridPanel'
	],
    
	verticalScrollerType: 'paginggridscroller',
	leadingBufferZone: 30,
	trailingBufferZone: 30,
	invalidateScrollerOnRefresh: false,	
	
	indexes:['pod','codice_cliente','toponimo'],
	
	columnLines: true,

    title : 'Forniture',
    store: 'Forniture',

	formatt_numeri_float: function(val) {
		if (val > 0) {
			return '<span style="color:blue;">' + val.toFixed(2) + '</span>';
		} else if (val <= 0) {
			return '<span style="color:red;">' + val.toFixed(2) + '</span>';
		}
		return val;
	},

	formatt_numeri_int: function(val) {
		if (val > 0) {
			return '<span style="color:green;">' + val + '</span>';
		} else if (val <= 0) {
			return '<span style="color:red;">' + val + '</span>';
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
					locked: true,
					sortable: true
					},
					{
					text: 'Cavo', 
					dataIndex: 'cavo',  
					width:40, 
					align:'center', 
					sortable: true
					},				
					{
					text: 'Codice Cliente', 
					dataIndex: 'codice_cliente',  
					width:80, 
					align:'center', 
					sortable: true
					},						
					{
					text: 'Indirizzo di furnitura', 
					 sortable: false,
						columns: [
									{text: 'Part.', dataIndex: 'particella',  sortable: true, width: 70}, 
									{text: 'Toponimo', dataIndex: 'toponimo', sortable: true, width:150},
									{text: 'N.', dataIndex: 'ncivico', sortable: false, width:50, align:'center'},
									{text: 'Comune', dataIndex: 'comune', sortable: true, align:'center', width:60, locked: true},
									{text: 'Prov', dataIndex: 'prov', align:'center', sortable: true, hidden: true, width:35}
						]
					},
					{
					text: 'Posizione', 
					dataIndex: 'posizione', 
					hidden: true, 
					sortable: true, 
					width:120, 
					align:'center'
					},
					{
					text: 'Modalità<br>di lettura', 
					dataIndex: 'lettura', 
					hidden: true, 
					sortable: true, 
					width:120, 
					align:'center'
					},
					{
					text: 'Modalità<br>accensione', 
					dataIndex: 'accensione', 
					hidden: true, 
					sortable: true, 
					width:120, 
					align:'center'
					},
					{
					text: 'Valore<br>Tensione', 
					dataIndex: 'valore_tensione', 
					width:60, 
					hidden: true,
					sortable: true,				
					align:'center'
					},
					{
					text: 'Modalità<br>consegna', 
					dataIndex: 'consegna', 
					hidden: true, 
					sortable: true, 
					width:120, 
					align:'center'
					},				
					{
					text: 'Contatore<br>elettrico', 
					dataIndex: 'contatore_elettrico', 
					hidden: true, 
					sortable: true, 
					width:75, 
					align:'center'
					},
					{
					text: 'Note', 
					dataIndex: 'note', 
					hidden: true, 
					width:120, 
					align:'center' 
					},
					{
					text: 'Punti<br>Luce', 
					dataIndex: 'punti_luce',  
					width:55, 
					align:'center', 
					sortable: true,
					renderer : this.formatt_numeri_int
					},
					{
					text: 'Potenza<br>(KW)', 
					dataIndex: 'potenza',  
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					}				
		];	
	
	
		this.listeners = [ {
				sortchange: function(){
					var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
					grid.getStore().loadPage(1);
				}
				}];
	
	
		
		this.dockedItems = [
			{
            xtype: 'toolbar',
            items: [
				{
                iconCls: 'icon-save',
                itemId: 'add',
				text: 'Nuova',
				width: 70,
				border: 1,
				style: {
					borderColor: 'gray'
					},
                action: 'add'
				},' ',
				{
                iconCls: 'icon-edit',
                itemId: 'edit',
                text: 'Modifica',
				width: 70,
				border: 1,
				style: { borderColor: 'gray' },				
                action: 'edit'
				},' ',
				{
                iconCls: 'icon-delete',
                text: 'Elimina',
                width: 70,
				border: 1,
				style: { borderColor: 'gray'},
				action: 'delete'
				},
				{
                iconCls: 'icon-excel',
                text: 'Excel',
                width: 70,
				border: 1,
				style: { borderColor: 'gray'},
				action: 'excel'
				},				
				'->',
				{
                iconCls: 'icon-grafico',
                text: 'Nascondi Grafici',
                width: 110,
				enableToggle: true,
				border: 1,
				style: {
					borderColor: 'gray'
					},
				action: 'showchart'
				}				
			]
			},
/* 			{
            xtype: 'toolbar',
            items: [			
				{
					fieldLabel: 'Ricerca per',
					xtype     : 'combo',
					labelWidth: 70,
					editable: false,
					id: 'searchfield',
					store     : [ ['pod','POD'], ['codice_cliente', 'Codice Cliente'], ['toponimo','Toponimo'] ],
					labelAlign: 'left'
				},			
				{
                xtype: 'textfield',
				id: 'searchvalue'
                //trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                //trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger'				
				},'-',
				{
                iconCls: 'icon-search',
                itemId: 'search',
                text: 'Cerca',
				width: 70,
				border: 1,
				style: {
					borderColor: 'gray'
					},
				//action: 'cerca'
				handler: function(){
					var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
					var store = grid.getStore();
					store.clearFilter(true);
					var searchValue = Ext.getCmp("searchvalue").getValue();
					var searchField = Ext.getCmp("searchfield").getValue();
					store.getProxy().extraParams.task = 'SEARCH';
					store.filter(searchField, searchValue);
					store.loadPage(1);
					grid.getView().refresh();
				}
				},'-',
				{
                iconCls: 'icon-search',
                itemId: 'reset',
                text: 'Reset',
				width: 70,
				border: 1,
				style: {
					borderColor: 'gray'
					},
				action: 'resetsearch'
				}     				
				]
			}, */
			/*{
			xtype: 'pagingtoolbar',
			dock:'bottom',
			store: 'Forniture',
			displayInfo: true,
			displayMsg: 'Forniture {0} - {1} di {2}',
			emptyMsg: "Nessuna fornitura trovata.",
 			plugins : [{
				ptype: 'pagingtoolbarresizer', 
				options : [ 10, 20, 30, 50, 100, 200, 300 ]
			}]	 		
			
			}*/
			];
		
		this.callParent(arguments);
	}
});