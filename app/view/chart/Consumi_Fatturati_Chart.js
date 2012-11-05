Ext.define('ExtPOD.view.chart.Consumi_Fatturati_Chart', {
	extend: 'Ext.chart.Chart',
    alias : 'widget.Consumi_Fatturati_Chart',
	id: 'GraficiConsumiFatturati',
	
	flex: 1,
    shadow: true,
	
	legend: {
        position: 'right'
    },
	
    animate: true,
    store: 'Consumi_Fatturati',
    axes: [
		{
		type: 'Numeric',
        position: 'left',
        fields: ['consumi_totali'],
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
        fields: ['mese_consumi'],
		grid: true
		}
	],
    
	series: [
		{
			type: 'line',
			axis: 'left',
			xField: 'mese_consumi',
			yField: ['consumi_totali'],
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
		}		
	]        
});   