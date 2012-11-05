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
    store: 'Consumi_Totali_Annui',
    axes: [
		{
		type: 'Numeric',
        position: 'left',
		title: 'MWh',
        fields: ['consumi_teorici_annui','letture_annue','telecontrollo_annuo','consumi_fatturati_annui'],
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
		title: 'Consumi Annui',
        type: 'Category',
        position: 'bottom',
        fields: ['anno_consumi'],
		grid: true,
		label: {
				font: '11px Arial',
				rotate: {
					degrees: 315
				}
			}	
		}
	],
    
	series: [
			{
				type: 'column',
				axis: 'bottom',
				xField: 'anno_consumi',
				yField: ['consumi_teorici_annui','letture_annue','telecontrollo_annuo','consumi_fatturati_annui'],
			}		
	]        
});   