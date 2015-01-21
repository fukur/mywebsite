Ext.define("Timer.view.Home", {
    extend: "Ext.Container",
    xtype: 'homePage',
	
	config: {
	    layout: {
	        type: 'fit'
	    }
	},
	
	initialize: function () {
	    
		// Toolbar oben
	    var topToolbar = {
	        xtype: "toolbar",
	        title: 'WebApp',
	        docked: "top",
	        items: [
	            { xtype: 'spacer' },
	        ]
	    };
	    
	 // Panel zur Anzeige des Home screens
	    var panel = {
	    	
	    	config: {
	    		type: 'fit',
		        align: 'middle',
		        padding: 20
	    	},	    	
	    	xtype: "panel",
			docked: "top",
			centered: true,
			html: [
                   '',
                   '<div id="welcHeader">Willkommen in der WebApp von Kevin Weigand</div>',
                   '<br><br><br>',
                   '<div id="homeText">WebApp mit Countdown Timer',
                   ' Prototype für ArsNova.</div>'
               ].join("")
			
		};
	    this.add(topToolbar, panel);
	}
});