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
		grid: true	
		}
	],
    
	series: [
			{
				type: 'column',
				axis: 'bottom',
				xField: 'anno_consumi',
				yField: ['consumi_teorici_annui','letture_annue','telecontrollo_annuo','consumi_fatturati_annui'],
				title: ['Consumi Teorici Annui', 'Letture Annue', 'Telecontrollo Annuo', 'Consumi Fatturati Annui'],
				label: {
					contrast: true,
					display: 'insideEnd',
					field: ['consumi_teorici_annui','letture_annue','telecontrollo_annuo','consumi_fatturati_annui'],
					color: '#000',
					orientation: 'vertical',
					'text-anchor': 'middle',
					    renderer: function(val) {					
							return Ext.util.Format.number(val, '0,000.00') + ' MWh';
						}
				}		
			}		
	]        
});   