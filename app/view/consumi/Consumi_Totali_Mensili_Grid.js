var filtersCfg = {
    ftype: 'filters',
    encode: true,
	local: false,
	updateBuffer: 1000
};

Ext.define('ExtPOD.view.consumi.Consumi_Totali_Mensili_Grid' ,{
	extend: 'Ext.grid.Panel',
    alias : 'widget.Consumi_Totali_Mensili_Grid',

    requires: [
		'Ext.ux.grid.FiltersFeature',
		'Ext.grid.PagingScroller'
	],	
	
	features: [
		filtersCfg,
		{
		id: 'group',
		ftype: 'groupingsummary',
		groupHeaderTpl: 'Anno Consumi: {name}',
		hideGroupedHeader: true,
		enableGroupingMenu: false,
		startCollapsed: false
		}
	],	
	
	columnLines: true,
	
    iconCls: 'icon-grid',

    title : 'Consumi Totali Mensili',
    store: 'Consumi_Totali_Mensili',
	
	width: 700,
	flex: 350,
	
	formatt_numeri_float: function(val) {
		if (val > 0) {
			return '<span style="color:blue;">' + Ext.util.Format.number(val, '0,000.00') + ' MWh' + '</span>';
		} else if (val <= 0) {
			return '<span style="color:red;">' + Ext.util.Format.number(val, '0,000.00') + ' MWh' + '</span>';
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
					sortable: false
					},
					{
					xtype: 'datecolumn',
					format:'M, Y',
					text: 'Data Consumi',
					dataIndex: 'data_consumi',
					width: 110,
					align: 'center',
					filter: {
						type: 'date'
						},
					summaryType: 'count',
					summaryRenderer: function(value, summaryData, dataIndex) {
						return ((value === 0 || value > 1) ? value + ' Mesi' : '1 Mese');
					}						
					},
					{
					text: 'Anno', 
					dataIndex: 'anno_consumi',   
					width:110, 
					align:'center',
					sortable: false,
					filter: true,
					hidden: true,
					summaryType: 'average'					
					},
					{
					text: 'Mese', 
					dataIndex: 'mese_consumi',  
					width:100, 
					align:'center', 
					sortable: true,
					filter: true,
					hidden: true,
					summaryType: 'count',
					summaryRenderer: function(value, summaryData, dataIndex) {
						return ((value === 0 || value > 1) ? value + ' Mesi' : '1 Mese');
						}						
					},
					{ 
					text: 'Consumi Teorici<br />(MWh)',
					dataIndex:'consumi_teorici',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: true,
					renderer : this.formatt_numeri_float,
					filter: true,
					summaryType: 'sum',
					summaryRenderer: this.formatt_numeri_float
					},
					{ 
					text: 'Letture<br /> (MWh)',
					dataIndex:'letture',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: true,
					renderer : this.formatt_numeri_float,
					filter: true,
					summaryType: 'sum',
					summaryRenderer: this.formatt_numeri_float
					},
					{ 
					text: 'Telecontrollo<br /> (MWh)',
					dataIndex: 'telecontrollo',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: true,
					renderer : this.formatt_numeri_float,
					filter: true,
					summaryType: 'sum',
					summaryRenderer: this.formatt_numeri_float
					},
					{ 
					text: 'Consumi Fatturati<br />(MWh)',
					dataIndex:'consumi_fatturati',
					type: 'float', 
					width:100, 
					align:'right',
					style: 'text-align:center',
					sortable: true,
					renderer : this.formatt_numeri_float,
					filter: true,
					summaryType: 'sum',
					summaryRenderer: this.formatt_numeri_float
					}
		];	

		this.callParent(arguments);
	}
});