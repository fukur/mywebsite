Ext.define('Timer.view.Main', {
	extend: "Ext.TabPanel",
	requires: ['Timer.view.Home',
	           'Timer.view.Impressum',
	           'Timer.view.Timer'
	],
	
	config: {
		fullscreen: true,
        tabBarPosition: 'bottom',
        styleHtmlContent: true,
        id: 'tabBar',
        items: [{
            title: 'Home',
            iconCls: 'home',
            xtype: 'homePage'
        }, {
            title: 'Timer',
            iconCls: 'time',
            xtype: 'timerpage'
            
        }, {
            title: 'Impressum',
            iconCls: 'info',
            xtype: 'impressumPage'
            
        }] // items
	}

});
