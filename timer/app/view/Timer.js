Ext.define("Timer.view.Timer", {
    extend: "Ext.Container",
    xtype: 'timerpage',
    requires: ['Ext.Picker', 'Ext.Audio'],
	alias: "widget.timerView",
	
	config: {
	    layout: {
	        type: 'fit'
	    }
	},

	initialize: function () {
	
	    this.callParent(arguments);
	    
	    // Audio File zu Beginn laden
	    document.getElementById('ring').load();
	    
	    
	    // Setzte Timer Button
	    var setButton = {
	        xtype: "button",
	        // text: 'Setze Timer',
	        iconCls: 'settings',
	        id: 'handlePickerButton',
	        handler: this.setzeTap,
	        scope: this
	    };
	    
	    // Starte timer button
	    var startButton = {
		        xtype: "button",
		        text: 'Start',
		        //ui: 'round',
		        id: 'handleCounterButton',
		        disabled: false,
		        handler: this.starteTap,
		        scope: this
		    };
	    
	    // Toolbar oben
	    var topToolbar = {
	        xtype: "toolbar",
	        title: 'My Timer',
	        docked: "top",
	        items: [
	            startButton,   
	            { xtype: 'spacer' },
	            setButton
	        ]
	    };
	    
	    // Panel zur Anzeige des Timers
	    var myPanel = {
	    	
	    	config: {
	    		type: 'fit',
		        align: 'middle',
		        padding: 20
	    	},	    	
	    	xtype: "panel",
	    	id: "timerAnzeige",
			title: 'timerPanel', 
			docked: "top",
			centered: true,
			html: '<div><span id="timePanel"><span id="minutes">10</span>:<span id="seconds">00</span></span></div><br /><br /><br /><br /><div id="fragen"></div>'
		};
	    
	    
	    // (unsichtbares) Audio Element und Button zum Stoppen des Audio Elements
	    var audio = {
		        xtype: "container",
		        docked: "bottom",
		        items: [
		            /*{ ## Funktioniert in einigen Browsern nicht!!! daher mit <audio> gelöst ##
					     xtype: 'audio',
					     url: 'ring.mp3',
					     id: 'sound',
					     autoplay:false,
					     hidden:true
					},*/
					{
					     xtype: 'button',
					     ui: 'decline-round',
					     id: 'stopAudio',
					     hidden: true,
					     text:'Stop ringing',
					     handler: function() {
					        
					    	 //var container = this.getParent().getParent();
					        // use ComponentQuery to get the audio component
					        // audio = container.down('audio');
					         
					         var tmpAudio = document.getElementById('ring');
					         tmpAudio.pause();
					         tmpAudio.currentTime=0;
					         
					         this.hide();
					         Ext.get('minutes').setHtml('10');
					         Ext.get('seconds').setHtml('00');
					     }
					}
		        ]
		    };
	    
	                    	
	    this.add([topToolbar, myPanel, audio]);
	},
	
	// Listener der Buttons
	setzeTap: function () {
	    this.fireEvent("countdownPicker", this);
	    this.zeigePicker();
	},
	
	starteTap: function () {
	    this.fireEvent("startTimer", this);
	},
	
	// Picker anzeigen
	zeigePicker: function () {
		
		var picker = Ext.create('Ext.Picker', {
            doneButton: 'Setze',
            cancelButton: 'Abbruch',
            
            slots: [{
                name: 'timerCountdown',
                title: 'Countdown Zeit',
                data: [{
                    text: '1 Minute',
                    value: 1
                }, {
                    text: '2 Minuten',
                    value: 2
                }, {
                    text: '3 Minuten',
                    value: 3
                }, {
                    text: '4 Minuten',
                    value: 4
                }, {
                    text: '5 Minuten',
                    value: 5
                }, {
                    text: '6 Minuten',
                    value: 6
                }, {
                    text: '7 Minuten',
                    value: 7
                }, {
                    text: '8 Minuten',
                    value: 8
                }, {
                    text: '9 Minuten',
                    value: 9
                }, {
                    text: '10 Minuten',
                    value: 10
                }, {
                    text: '11 Minuten',
                    value: 11
                }, {
                    text: '12 Minuten',
                    value: 12
                }, {
                    text: '13 Minuten',
                    value: 13
                }, {
                    text: '14 Minuten',
                    value: 14
                }, {
                    text: '15 Minuten',
                    value: 15
                }, {
                    text: '16 Minuten',
                    value: 16
                }, {
                    text: '17 Minuten',
                    value: 17
                }, {
                    text: '18 Minuten',
                    value: 18
                }, {
                    text: '19 Minuten',
                    value: 19
                }, {
                    text: '20 Minuten',
                    value: 20
                }]
            }],
            listeners: {
                "change": function(picker) {
                    
                	selectedValue = picker.getValue().timerCountdown;

                    Ext.get('minutes').setHtml(selectedValue);
                    Ext.get('seconds').setHtml('00');
                }
            }
        });
		
		// Default für Picker
		picker.setValue( {timerCountdown: 10}, true ) 
        picker.show();
		
	}
    
});