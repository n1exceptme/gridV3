Ext.define('ExtPOD.view.fornitura.EditForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.EditForm',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Editare/Creare Fornitura',
    layout: 'fit',
    autoShow: true,
    width: 280,
    
    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
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
                        fieldLabel: 'Cavo'
                    },
                    {
                        xtype: 'textfield',
                        name : 'pod',
                        fieldLabel: 'POD'
                    },
                    {
                        xtype: 'textfield',
                        name : 'codice_cliente',
                        fieldLabel: 'Codice Cliente'
                    },					
                    {
                        xtype: 'textfield',
                        name : 'particella',
                        fieldLabel: 'Particella'
                    },
                    {
                        xtype: 'textfield',
                        name : 'toponimo',
                        fieldLabel: 'Toponimo'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'ncivico',
                        fieldLabel: 'N° Civico'
                    },
                    {
                        xtype: 'textfield',
                        name : 'comune',
                        fieldLabel: 'Comune'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'prov',
                        fieldLabel: 'Prov'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'posizione',
                        fieldLabel: 'Posizione'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'lettura',
                        fieldLabel: 'Modalità<br>lettura'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'accensione',
                        fieldLabel: 'Modalità<br>accensione'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'valore_tensione',
                        fieldLabel: 'Valore Tensione'
                    },  					
                    {
                        xtype: 'textfield',
                        name : 'consegna',
                        fieldLabel: 'Modalità<br>consegna'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'contatore_elettrico',
                        fieldLabel: 'Contatore Elettrico'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'note',
                        fieldLabel: 'Note'
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
						allowDecimals: true,
						decimalPrecision: 1,
						step: 0.1						
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Salva',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Annulla',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
