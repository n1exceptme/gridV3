Ext.define('ExtPOD.view.chart.Consumi_Totali_Annui_Chart', {
	extend: 'Ext.chart.Chart',
    alias : 'widget.Consumi_Totali_Annui_Chart',
	id: 'GraficiConsumiTotaliAnnui',
	
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
				renderer: Ext.util.Format.dateRenderer('m-Y'),
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
                tips: {
                    trackMouse: true,
                    width: 110,
                    height: 25,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('consumi_teorici') + ' MWh ' + storeItem.get('mese_consumi'));
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
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'data_consumi',
                yField: 'letture',
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
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                xField: 'data_consumi',
                yField: 'telecontrollo',
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
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                fill: true,
                xField: 'data_consumi',
                yField: 'consumi_fatturati',
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }			
	]        
});   

/* Grouped Bar

{
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: store1,
            legend: {
              position: 'right'  
            },
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1', 'data2', 'data3'],
                minimum: 0,
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                grid: true,
                title: 'Number of Hits'
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'column',
                axis: 'bottom',
                yField: ['data1', 'data2', 'data3'],
				xField: 'name'
            }]
        }
*/