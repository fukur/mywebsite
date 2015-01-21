Ext.define('Timer.view.Main', {
	extend: "Ext.tab.Panel",
	requires: ['Timer.view.Home',
	           'Timer.view.Impressum',
	           'Timer.view.Timer'
	],
	
	config: {
		fullscreen: true,
        tabBarPosition: 'bottom',
        id: 'tabBar',
        items: [{
        	
            title: 'Home',
            iconCls: 'home',
            items: {xtype: 'homePage'}
            
        }, {
            title: 'Timer',
            iconCls: 'time',
            items: {xtype: 'timerpage'}
            
        }, {
            title: 'Impressum',
            iconCls: 'info',
            scrollable: true,
            items: {xtype: 'impressumPage'}
            
        }] // items
	}

});