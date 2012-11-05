Ext.define('ExtPOD.view.consumi.Consumi_Totali_Annui_Grid' ,{
	extend: 'Ext.grid.Panel',
    alias : 'widget.Consumi_Totali_Annui_Grid',

	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Consumi Totali Annui',
    store: 'Consumi_Totali_Annui',
	
	width: 700,
	height: 150,
	
	formatt_numeri_float: function(val) {
		if (val > 0) {
			return '<span style="color:blue;">' + Ext.util.Format.number(val, '0,000.00') + '</span>';
		} else if (val <= 0) {
			return '<span style="color:red;">' + Ext.util.Format.number(val, '0,000.00') + '</span>';
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
					text: 'Consumi Teorici<br />(MWh)',
					dataIndex:'consumi_teorici_annui',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Letture<br /> (MWh)',
					dataIndex:'letture_annue',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Telecontrollo<br /> (MWh)',
					dataIndex: 'telecontrollo_annuo',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Consumi Fatturati<br />(MWh)',
					dataIndex:'consumi_fatturati_annui',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					}
		];	

		this.callParent(arguments);
	}
});