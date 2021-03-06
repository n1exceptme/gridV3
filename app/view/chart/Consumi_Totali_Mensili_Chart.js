Ext.define('ExtPOD.view.chart.Consumi_Totali_Mensili_Chart', {
	extend: 'Ext.chart.Chart',
    alias : 'widget.Consumi_Totali_Mensili_Chart',
	id: 'GraficiConsumiTotaliMensili',
	
	flex: 1,
    shadow: true,
	
	legend: {
        position: 'right'
    },
	
    animate: true,
    store: 'Consumi_Totali_Mensili',
    axes: [
		{
		type: 'Numeric',
        position: 'left',
		title: 'MWh',
        fields: ['consumi_teorici','letture','telecontrollo','consumi_fatturati'],
        minimum: 0,
		minorTickSteps: 1,
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 1
            }
        }
		}, 
		{
		title: 'Consumi Mensili (KWh)',
        type: 'Category',
        position: 'bottom',
        fields: ['data_consumi'],
		grid: true,
		label: {
				font: '11px Arial',
				renderer: Ext.util.Format.dateRenderer('M-y'),
				rotate: {
					degrees: 315
				}
			}	
		}
	],
    
	series: [
			{
				type: 'line',
				axis: 'left',
				xField: 'data_consumi',
				yField: ['consumi_teorici'],
				title: ['Consumi Teorici'],
                tips: {
                    trackMouse: true,
					fill: '#18428E',
                    width: 120,
                    height: 50,
                    renderer: function(storeItem, item) {
						useThousandSeparator: true,
                        this.setTitle( Ext.util.Format.number(storeItem.get('consumi_teorici'),'0,000.00') + ' MWh <br />' + 
										Ext.Date.format(storeItem.get('data_consumi')," M, Y"));
                    }
                },				
				fill: true,
				fillOpacity: 0.5,			
				markerConfig: {
					type: 'circle',
					size: 4,
					radius: 4,
					'stroke-width': 0,
					fill: '#18428E',
					stroke: '#18428E'
				}
			},
			{
                type: 'line',
				fill: true,
                highlight: {
                    size: 5,
                    radius: 5
                },
                axis: 'left',
                xField: 'data_consumi',
                yField: 'letture',
				title: ['Letture'],
                tips: {
                    trackMouse: true,
					fill: '#18428E',
                    width: 120,
                    height: 50,
                    renderer: function(storeItem, item) {
						useThousandSeparator: true,
                        this.setTitle( Ext.util.Format.number(storeItem.get('letture'),'0,000.00') + ' MWh <br />' + 
										Ext.Date.format(storeItem.get('data_consumi')," M, Y"));
                    }
                },				
                markerConfig: {
                    type: 'cross',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }, 
			{
                type: 'line',
				fill: true,
                highlight: {
                    size: 5,
                    radius: 5
                },
                axis: 'left',
                smooth: true,
                xField: 'data_consumi',
                yField: 'telecontrollo',
				title: ['Telecontrollo'],
                tips: {
                    trackMouse: true,
					fill: '#18428E',
                    width: 120,
                    height: 50,
                    renderer: function(storeItem, item) {
						useThousandSeparator: true,
                        this.setTitle( Ext.util.Format.number(storeItem.get('telecontrollo'),'0,000.00') + ' MWh <br />' + 
										Ext.Date.format(storeItem.get('data_consumi')," M, Y"));
                    }
                },					
                markerConfig: {
                    type: 'diamond',
                    size: 3,
                    radius: 3,
                    'stroke-width': 0
                }
            }, 
			{
                type: 'line',
                highlight: {
                    size: 5,
                    radius: 5
                },
                axis: 'left',
                smooth: true,
                fill: true,
                xField: 'data_consumi',
                yField: 'consumi_fatturati',
				title: ['Consumi Fatturati'],
                tips: {
                    trackMouse: true,
					baseCls: 'x-tipcustom',
                    width: 120,
                    height: 50,
                    renderer: function(storeItem, item) {
						useThousandSeparator: true,
                        this.setTitle( Ext.util.Format.number(storeItem.get('consumi_fatturati'),'0,000.00') + ' MWh <br />' + 
										Ext.Date.format(storeItem.get('data_consumi')," M, Y"));
                    }
                },					
                markerConfig: {
                    type: 'triangle',
                    size: 5,
                    radius: 5,
                    'stroke-width': 0
                }
            }			
	]        
});