/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtPOD.view.Viewport', {
    extend: 'Ext.Viewport',
	layout: 'fit',
    
    requires: [
		'ExtPOD.view.fornitura.Dashboard',
        'ExtPOD.view.fornitura.FornitureGrid',
		'ExtPOD.view.fornitura.Scheda',
        'ExtPOD.view.fornitura.EditForm',
		'ExtPOD.view.consumi.Consumi_Totali_Mensili_Grid',
		'ExtPOD.view.consumi.Consumi_Totali_Annui_Grid',
		'ExtPOD.view.volture.VoltureGrid',
		'ExtPOD.view.chart.ConsumiBar',
		'ExtPOD.view.chart.ConsumiLine',
		'ExtPOD.view.chart.Consumi_Totali_Mensili_Chart',
		'ExtPOD.view.chart.Consumi_Totali_Annui_Chart'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
		
            items: [
                {
                    xtype: 'Dashboard'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});