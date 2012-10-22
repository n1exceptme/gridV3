Ext.define('ExtPOD.view.chart.ConsumiBar', {
	extend: 'Ext.chart.Chart',
    alias : 'widget.ConsumiBar',
	id: 'GraficiRiassuntivi',
	
	flex: 1,
    shadow: true,
	
	legend: {
        position: 'right'
    },
	
    animate: true,
    store: 'Forniture',
    axes: [
		{
		type: 'Numeric',
        position: 'left',
        fields: ['potenza'],
        minimum: 0,
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
		title: 'Potenza Teorica POD (KWh)',
        type: 'Category',
        position: 'bottom',
        fields: ['pod'],
		grid: true,
        label: {
            renderer: function(v) {
                return Ext.util.Format.substr(v, 6, 8);
            },
            rotate: {
                degrees: 315
            }			
        }
		}
	],
    
	series: [
		{
			type: 'column',
			axis: 'left',
			highlight: true,
			style: {
				fill: '#ff6600'
			},
			highlightCfg: {
				fill: '#ff6600'
			},
			label: {
				contrast: true,
				display: 'insideEnd',
				field: 'potenza',
				color: '#000',
				orientation: 'vertical',
				'text-anchor': 'middle'
			},
			xField: 'pod',
			yField: ['potenza'],
			
			renderer: function(sprite, record, attr, index, store) {
					return Ext.apply(attr, {
						fill: '#ff8b3d'
					});
			}			
			
		},
		{
			type: 'line',
			axis: 'left',
			xField: 'pod',
			yField: ['potenza'],
			tips: {
				trackMouse: true,
				width: 90,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(storeItem.get('punti_luce') + ' Punti Luce ');
				}
			},
			style: {
				fill: '#18428E',
				stroke: '#18428E',
				'stroke-width': 2
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				fill: '#18428E',
				stroke: '#18428E'
			}
		}		
	]        
});   