Ext.define('ExtPOD.view.chart.ConsumiLine', {
	extend: 'Ext.chart.Chart',
    alias : 'widget.ConsumiLine',
	id: 'GraficiConsumi',
	
	flex: 1,
    shadow: true,
	
	legend: {
        position: 'right'
    },
	
    animate: true,
    store: 'Consumi',
    axes: [
		{
		type: 'Numeric',
        position: 'left',
        fields: ['consumi'],
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
		title: 'Consumi POD (KWh)',
        type: 'Category',
        position: 'bottom',
        fields: ['data'],
		grid: true
		}
	],
    
	series: [
		{
			type: 'line',
			axis: 'left',
			xField: 'data',
			yField: ['consumi'],
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