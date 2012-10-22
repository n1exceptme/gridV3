Ext.define('ExtPOD.view.fornitura.Scheda', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Scheda',

	requires: [
		'Ext.ux.GMapPanel'
	],
	
	title:'Scheda Dettagliata',
	titleAlign : 'left',
	height: 600,
	autoScroll:true,
	frame: true,
	
	collapsible: true,
	collapsed: true,
	readOnly: true,
	
	defaults: {
		padding: '5 5 5 5',
		anchor: '100%',
		labelAlign: 'left',
		allowBlank: true,
		combineErrors: true,
		msgTarget: 'side',
		readOnly: true
	},

	items: [
		{
			xtype: 'fieldset',
			title: 'Identificativi',
			defaults: {
				readOnly: true,
				labelWidth: 89,
				anchor: '100%',
				layout: {
					type: 'hbox',
					defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
				}
			},
			items: [
					{
						xtype: 'textfield',
						name : 'id',
						fieldLabel: 'id',
						hidden:true
					},    
					{
						xtype: 'textfield',
						name : 'cavo',
						fieldLabel: 'Cavo',
						width: 90
					},		
					{
					xtype: 'fieldcontainer',
					msgTarget: 'under',
					defaults: {
						readOnly: true,
						hideLabel: true
						//labelAlign: 'top'
					},
					items: [
							{
								xtype: 'textfield',
								name : 'pod',
								fieldLabel: 'POD',
								width: 125,
							},
							{
								xtype: 'textfield',
								name : 'codice_cliente',
								fieldLabel: 'Codice Cliente',
								width: 125,
							}
						]
					}
				]	
		},
		{
			xtype: 'fieldset',
			title: 'Indirizzo e Collocazione POD',
			defaults: {
				readOnly: true,
				labelWidth: 89,
				anchor: '100%',
				layout: {
					type: 'hbox',
					defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
				}
			},
			items: [		
					{
					xtype: 'fieldcontainer',
					fieldLabel: 'Indirizzo',
					hideLabel: false,
					msgTarget: 'under',
					defaults: {
						readOnly: true,
						hideLabel: true
						//labelAlign: 'top'
					},
					items: [
							{
							xtype: 'textfield',
							fieldLabel: 'Particella',
							name: 'particella', 
							width: 85
							},
							{
							xtype: 'textarea',    
							fieldLabel: 'Toponimo', 
							name: 'toponimo', 
							width: 125,
							height: 50,
							preventScrollbars: false
							},
							{
							xtype: 'textfield',    
							fieldLabel: 'N.Civico', 
							name: 'ncivico', 
							width: 35
							}
						]
					},
					{
						xtype: 'fieldcontainer',
						fieldLabel: 'Comune',
						hideLabel: false,
						msgTarget: 'under',
						defaults: {
							readOnly: true,
							hideLabel: true
							//labelAlign: 'top'
						},
						items: [				
								{xtype: 'textfield',    fieldLabel: 'Comune', name: 'comune', width: 60},
								{xtype: 'displayfield', value: '('},
								{xtype: 'textfield',    fieldLabel: 'Prov', name: 'prov', width: 25},
								{xtype: 'displayfield', value: ')'}
						]
					},
					{
						xtype: 'fieldcontainer',
						fieldLabel: 'Posizione',
						hideLabel: false,
						msgTarget: 'under',
						defaults: {
							readOnly: true,
							hideLabel: true
							//labelAlign: 'top'
						},
						items: [				
								{
								xtype: 'textfield',    
								fieldLabel: 'Posizione', 
								name: 'posizione',
								preventScrollbars: false,
								width: 150
								}
						]
					},					
				]
		},
		{
		xtype: 'fieldset',
		title: 'Informazioni tecniche',
		layout: 'anchor',
		defaults: {
			readOnly: true,
			anchor: '100%',
			labelStyle: 'padding-left:4px;'
		},
		collapsible: false,
		items: [
			{
				xtype: 'radiogroup',
				fieldLabel: 'Contatore Elettrico',
				cls: 'x-check-group-alt',
				items: [
					{boxLabel: 'S&igrave', name: 'contatore_elettrico', inputValue: 'SI'},
					{boxLabel: 'No', name: 'contatore_elettrico', inputValue: ''}
				]
			},
			{
			xtype: 'radiogroup',
			cls: 'x-check-group-alt',
			msgTarget: 'side',
			anchor: '-18',
			layout: 'column',
			defaultType: 'container',
			items: [
				{
				columnWidth: 0.33,
				items: [
					{xtype: 'component', html: 'Valore Tensione', cls:'x-form-check-group-label'},
					{xtype: 'radiofield', boxLabel: '220', name: 'valore_tensione', inputValue: 220},
					{xtype: 'radiofield', boxLabel: '380', name: 'valore_tensione', inputValue: 380}
					]
				},
				{
				columnWidth: 0.33,
				items: [
					{xtype: 'component', html: 'Modalit&agrave<br>lettura', cls:'x-form-check-group-label'},
					{xtype: 'radiofield', boxLabel: 'Pulsante', name: 'lettura', inputValue: 'PULSANTE'},
					{xtype: 'radiofield', boxLabel: 'A vista', name: 'lettura', inputValue: 'A VISTA'},
					{xtype: 'radiofield', boxLabel: 'Altro', name: 'lettura', inputValue: ''}					
					]
				},
				{
				columnWidth: 0.33,
				items: [
					{xtype: 'component', html: 'Modalit&agrave<br>consegna', cls:'x-form-check-group-label'},
					{xtype: 'radiofield', boxLabel: '3FN', name: 'consegna', inputValue: '3FN'},
					{xtype: 'radiofield', boxLabel: '1FN', name: 'consegna', inputValue: '1FN'}
					]
				}
				]
			},
			{
				xtype: 'textfield',
				name : 'accensione',
				fieldLabel: 'Modalit&agrave<br>accensione'
			}			
			]
		},
		{
			xtype: 'numberfield',
			name : 'punti_luce',
			fieldLabel: 'Punti Luce'
		},
		{
			xtype: 'numberfield',
			name : 'potenza',
			fieldLabel: 'Potenza',
			decimalPrecision: 2
		},		
		{
			xtype: 'textarea',
			name : 'note',
			fieldLabel: 'Note',
			preventScrollbars: false,
			height: 50
		}
],
	buttons: [
		{
		iconCls: 'icon-maps',
		itemId: 'maps',
		text: 'Localizza',
		width: 70,
		border: 1,
		style: {
			borderColor: 'gray'
			},				
//		action: 'localize'
		handler: function() {
			var form = this.up('form').getForm(),
			indirizzo = '';
			
			indirizzo = form.findField("ncivico").getValue() + " ";
			indirizzo += form.findField("particella").getValue() + " ";
			indirizzo += form.findField("toponimo").getValue();
			indirizzo += ", 80147, " + form.findField("comune").getValue();

			//Ext.Msg.alert('Form Values', indirizzo);		
		
			if(form.findField("toponimo").getValue()) {
					Ext.create('Ext.window.Window', {
					autoShow: true,
					layout: 'fit',
					title: 'Google Maps',
					closeAction: 'hide',
					width:450,
					height:450,
					border: false,
					x: 40,
					y: 60,
					items: {
						xtype: 'gmappanel',
						center: {
							geoCodeAddr: indirizzo,
							marker: {
									title: "POD: " + form.findField("pod").getValue(),
									listeners: {
												click: function(e){
													Ext.Msg.alert('POD', indirizzo);
													}
												}
									}
								}
					}
				});
			}
		}
		}		
	]	
});