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
    store: 'Consumi_Totali',
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
                    width: 110,
                    height: 40,
                    renderer: function(storeItem, item) {
						useThousandSeparator: true,
                        this.setTitle( storeItem.get('consumi_teorici') + ' MWh <br />' + 
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
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
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
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }			
	]        
});