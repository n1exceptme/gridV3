Ext.define('ExtPOD.view.fornitura.Dashboard', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Dashboard',

	requires: [
        'ExtPOD.view.fornitura.FornitureGrid',
		'ExtPOD.view.consumi.ConsumiGrid',
		'ExtPOD.view.fornitura.Scheda',
		'ExtPOD.view.chart.ConsumiBar'
	],

	title: 'Anagrafica POD',
    frame: true,
    bodyPadding: 5,
    //width: 870,
    //height: 1200,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items: [
        {
        layout: {type: 'border', align: 'default'},
		height: 500,
        border: false,
        bodyStyle: 'background-color: transparent',
        
        items: [
			{
            xtype:'tabpanel',
            activeTab:3,
			height: 400,
			split: true,
			autoScroll:true,
			region: 'center',			
            items: [		
					{
					title:'Anagrafica',
					id:'anagraficatab',
					iconCls: 'icon-grid',
					layout: 'fit',
					xtype: 'FornitureGrid'
					},
					{
					title:'Consumi',
					id:'consumitab',
					iconCls:'icon-consumi',
					xtype: 'ConsumiGrid'
					},
					{
					title:'Volturazioni',
					id:'volturazionitab',
					iconCls:'icon-volture',
					xtype: 'VoltureGrid'
					},
					{
					title:'Consumi Totali Mensili',
					id: 'consumimensilitab',
					iconCls:'icon-consumimensili',
					xtype: 'Consumi_Totali_Mensili_Grid'
					},					
					{
					title:'Consumi Totali Annui',
					id: 'consumiannuitab',
					iconCls:'icon-consumiannui',
					xtype: 'Consumi_Totali_Annui_Grid'
					},	
					]
			},
			{
            xtype:'Scheda',
			iconCls: 'icon-scheda',
			bodyStyle:'padding:10px',
			width: 400,
			split: true,
			autoScroll:true,
			region: 'east'
			}		
		]
        },
		{	
			xtype: 'tabpanel',
            activeTab: 2,
            defaults:{
                bodyStyle:'padding:10px'
            },			
			title: 'Grafici Riassuntivi',
			iconCls: 'icon-chart',
			split: true,
			height: 300,
			hidden: false,
			id: 'chartpanel',
			layout: 'fit',
			margin: '5 0 0 0',
			items: [
					{
					title: 'Potenza',
					xtype: 'ConsumiBar'
					},
					{
					title: 'Consumi',
					xtype: 'ConsumiLine'
					},
					{
					title: 'Consumi Totali Mensili',
					xtype: 'Consumi_Totali_Mensili_Chart'
					},
					{
					title: 'Consumi Totali Annui',
					xtype: 'Consumi_Totali_Annui_Chart'
					}				
					]
		}	
	]
});