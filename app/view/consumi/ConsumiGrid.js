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
					locked: true,
					sortable: true
					},
					{
					text: 'Consumi<br>(KWh)', 
					dataIndex: 'consumi',  
					type: 'float', 
					width:70, 
					align:'right', 
					sortable: true,
					renderer : this.formatt_numeri_float
					},				
					{
					text: 'Mese', 
					dataIndex: 'mese',  
					width:80, 
					align:'center', 
					sortable: true
					},
					{
					text: 'Anno', 
					dataIndex: 'anno',  
					width:80, 
					align:'center', 
					sortable: true
					},
					{
					text: 'Periodo<br>Consumi', 
					dataIndex: 'data',  
					width:80, 
					align:'center', 
					sortable: true,
					renderer: Ext.util.Format.dateRenderer('d/m/Y')
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