Ext.define('ExtPOD.view.consumi.Consumi_Totali_Mensili_Grid' ,{
	extend: 'Ext.grid.Panel',
    alias : 'widget.Consumi_Totali_Mensili_Grid',

	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Consumi Totali Mensili',
    store: 'Consumi_Totali_Mensili',
	
	width: 700,
	flex: 350,
	
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
					xtype: 'datecolumn',
					format:'M, Y',
					text: 'Data Consumi',
					dataIndex: 'data_consumi',
					width: 110,
					align: 'center',
					},
					{
					text: 'Anno', 
					dataIndex: 'anno_consumi',   
					width:110, 
					align:'center',
					sortable: false,
					hidden: true
					},
					{
					text: 'Mese', 
					dataIndex: 'mese_consumi',  
					width:100, 
					align:'center', 
					sortable: false,
					hidden: true
					},
					{ 
					text: 'Consumi Teorici<br />(MWh)',
					dataIndex:'consumi_teorici',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Letture<br /> (MWh)',
					dataIndex:'letture',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Telecontrollo<br /> (MWh)',
					dataIndex: 'telecontrollo',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: false,
					renderer : this.formatt_numeri_float
					},
					{ 
					text: 'Consumi Fatturati<br />(MWh)',
					dataIndex:'consumi_fatturati',
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