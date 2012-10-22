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
		'ExtPOD.view.chart.ConsumiBar'
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