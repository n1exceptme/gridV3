Ext.define('ExtPOD.view.fornitura.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.FornitureGrid',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Forniture',
    store: 'Forniture',

    columns: [
				{
				xtype: 'rownumberer',
				width: 35,
				align: 'left',
				locked: true,
				sortable: true
				},
				{
				text: 'POD', 
				dataIndex: 'POD',   
				width:110, 
				align:'center',
				locked: true,
				sortable: true
				},			
				{text: 'Codice Cliente', dataIndex: 'CodiceCliente',  width:80, align:'center'},						
				{text: 'Indirizzo di fornitura', 
				 sortable: false,
				 
					columns: [
								{text: 'Part.', dataIndex: 'Particella',  sortable: true, width: 50}, 
								{text: 'Toponimo', dataIndex: 'Indirizzo_fornitura', sortable: true, width:120},
								{text: 'Comune', dataIndex: 'Comune', sortable: true, width:70, locked: true},
								{text: 'Prov', dataIndex: 'Prov', sortable: true, hidden: true, width:35},
								{text: 'N.', dataIndex: 'Ncivico', sortable: true, width:40}
					]
				},
				{text: 'Settore', dataIndex: 'Settore', hidden: true, width:120, align:'center'},
				{text: 'Sigla<br>quadro', dataIndex: 'SiglaQuadro', hidden: true, width:50, align:'center'},
				{text: 'Distributore', dataIndex: 'Dist', hidden: true, width:60, align:'center'},
				{text: 'Tipo<br>apparec.', dataIndex: 'Tipo_app',  width:55, align:'center'},
				{
				text: 'Potenza<br>Disponibile', 
				dataIndex: 'Potenza_disp', 
				type: 'float', 
				width:60, 
				align:'right', 
				//renderer : formatt_numeri_int
				},
				{text: 'Tipologia', dataIndex: 'Tipologia', width:60, align:'center' },
				{
				text: 'Valore<br>Tensione', 
				dataIndex: 'ValoreTensione', 
				width:60, 
				hidden: true, 
				align:'center', 
				//renderer : formatt_numeri_int
				},
				{text: 'Opz.<br>Trasp.', dataIndex: 'Opzione_trasp',  width:70, align:'center'},
				{
				text: 'Consumi Annui<br>(KWh)', 
				dataIndex: 'Consumi_KWh',  
				type: 'float', 
				width:80, 
				align:'right', 
				//renderer : formatt_numeri_float
				},
				{text: 'Inizio fornitura<br>merc.lib.', 
				dataIndex: 'Inizio_fornitura',  
				type: 'date', 
				renderer: Ext.util.Format.dateRenderer('m/d/Y'), 
				hidden: true, 
				width:100,
				align:'center'}
	],
	
	initComponent: function() {
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Nuova',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Elimina',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Forniture',
            displayInfo: true,
            displayMsg: 'Forniture {0} - {1} de {2}',
            emptyMsg: "Nessuna fornitura trovata."
        }];
		
		this.callParent(arguments);
	}
});
