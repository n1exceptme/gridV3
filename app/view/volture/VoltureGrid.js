Ext.define('ExtPOD.view.volture.VoltureGrid' ,{
    extend: 'Ext.ux.LiveFilterGridPanel',
    alias : 'widget.VoltureGrid',

    requires: [
		'Ext.ux.LiveSearchGridPanel'
	],
	
	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Volture',
    store: 'Volture',
	
	verticalScrollerType: 'paginggridscroller',
	invalidateScrollerOnRefresh: false,
	
	width: 700,
	height: 500,	

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
					text: 'Data Inizio', 
					dataIndex: 'data_inizio',  
					width:100, 
					align:'center', 
					sortable: true,
					renderer: Ext.util.Format.dateRenderer('d/m/Y')
					},
					{
					text: 'Data Fine', 
					dataIndex: 'data_fine',  
					width:100, 
					align:'center', 
					sortable: true,
					renderer: Ext.util.Format.dateRenderer('d/m/Y')
					},
					{
					text: 'Fornitore', 
					dataIndex: 'fornitore',   
					width:110, 
					align:'center',
					editor: 'textfield',
					sortable: true
					}					
					
		];	
	
		this.listeners = [ {
				sortchange: function(){
					var grid = Ext.ComponentQuery.query('VoltureGrid')[0];
					grid.getStore().load();
				}
				}];	
		
		// trigger the data store load
		//ConsumiStore.guaranteeRange(0, 199);
		
		this.callParent(arguments);
	}
});