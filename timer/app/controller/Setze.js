Ext.define("Timer.controller.Setze", {
    extend: "Ext.app.Controller",
    
    config: {
        refs: {
            timer: "timerView"
        },
        control: {
            timer: {
                countdownPicker: "setCountdown",
                startTimer: "starteTimer"
            }
        }
    },
    

    
    setCountdown: function () {
        //console.log("countdown auswahl");
    },
    
    
    starteTimer: function () {
		
		var begin = Date.now();
		
		// auswahl der minuten aus dem panel lesen
		var minuten = Ext.get('minutes').getHtml();
		
		var tmpSeconds = minuten*60;
		
		var counter=setInterval(function(){
			
			// Bisher verstrichene Sekunden
			var zeitLaeuft = (Date.now()-begin)/1000;
			
			
			// jede sekunde in der fkt aufgerufen wird - eine sec abziehen
			tmpSeconds--;
			
			// Format mm:ss erstellen
			var min = Math.floor(tmpSeconds/60);
			var sec = tmpSeconds-min*60;
			
			// In Panel schreiben
			Ext.get('minutes').setHtml(min);
			Ext.get('seconds').setHtml(sec<10?'0'+sec:sec);
			
			// In badge an der Tabbar schreiben			
			var tabBar = Ext.getCmp('tabBar');
		    var TimerTab = tabBar.down('.tab[title=Timer]');
		    TimerTab.setBadgeText(min+':'+(sec<10?'0'+sec:sec));
			
			//if (tmpSeconds <= 0) nicht ganz genau
			if(zeitLaeuft >= minuten*60) // ziemlich genau da system zeit genommen wird
			{
			   clearInterval(counter);
			   			   
			   Ext.getCmp('sound').play();
			   
			   Ext.getCmp('stopAudio').show();
			   
			   Ext.getCmp('handleCounterButton').enable();
			   Ext.getCmp('handlePickerButton').enable();
			   
			   Ext.Msg.alert("Timer ist abgelaufen!");
			   
			   TimerTab.setBadgeText('');

			   return;
			}
			
		}, 1000); //1000 will  run it every 1 second
		 
		
	}
    
    
    
    /*,
    
    launch: function () {
        this.callParent();
        //console.log("launch");
    },
    init: function () {
        this.callParent();
        //console.log("init");
    }*/
});
