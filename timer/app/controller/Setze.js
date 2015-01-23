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
    	// Keine weitere Funktion
        //console.log("countdown auswahl");
    },
    
    
    starteTimer: function () {
    	
    	// Fragen Text anzeigen
    	Ext.get('fragen').setHtml("Nun haben Sie Zeit Fragen zu beantworten!");
    	
    	// Start und Set Button deaktivieren
    	Ext.getCmp('handleCounterButton').disable();
	    Ext.getCmp('handlePickerButton').disable();
		
	    // aktuelle Zeit
		var begin = Date.now();
		
		// auswahl der minuten aus dem panel lesen
		var minuten = Ext.get('minutes').getHtml();
		
		var tmpSeconds = minuten*60;
		
		
		// Funktion die jede Sekunde aufgerufen wird
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
			
		    // ZEIT ABGELAUFEN
		    
			//if (tmpSeconds <= 0) --> nicht ganz genau
			if(zeitLaeuft >= minuten*60) // ziemlich genau da system zeit genommen wird
			{
			   // Funktionsaufruf jede Sekunde stoppen
			   clearInterval(counter);
			   
			   // Wecker sound abspielen
			   Ext.getCmp('sound').play();
			   
			   // Button zum stoppen von Audio anzeigen
			   Ext.getCmp('stopAudio').show();
			   
			   // Start, Set Buttons aktivieren
			   Ext.getCmp('handleCounterButton').enable();
			   Ext.getCmp('handlePickerButton').enable();
			   
			   // Alert Fenster
			   Ext.Msg.alert("Timer ist abgelaufen!");
			   
			   
			   // Leeren
			   TimerTab.setBadgeText('');
			   Ext.get('fragen').setHtml("");

			   return;
			}
			
		}, 1000); //1000 will  run it every second
		 
		
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
