Ext.define('ExtPOD.view.consumi.Consumi_Fatturati_Grid' ,{
	extend: 'Ext.grid.Panel',
    alias : 'widget.Consumi_Fatturati_Grid',

	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Consumi Totali Commessa',
    store: 'Consumi_Fatturati',
	
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
					text: 'Anno', 
					dataIndex: 'anno_consumi',   
					width:110, 
					align:'center',
					sortable: false
					},
					{
					text: 'Mese', 
					dataIndex: 'mese_consumi',  
					width:100, 
					align:'center', 
					sortable: false
					},
					{ 
					text: 'Consumi Fatturati',
					dataIndex:'consumi_totali',
					type: 'float', 
					width:100, 
					align:'right', 
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Consumi Teorici',
					dataIndex:'consumi_totali',
					type: 'float', 
					width:100, 
					align:'right', 
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Letture',
					dataIndex:'consumi_totali',
					type: 'float', 
					width:100, 
					align:'right', 
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Telecontrollo',
					dataIndex: 'consumi_totali',
					type: 'float', 
					width:100, 
					align:'right', 
					sortable: false,
					renderer : this.formatt_numeri_float
					}
		];	

		this.callParent(arguments);
	}
});