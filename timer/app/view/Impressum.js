Ext.define("Timer.view.Impressum", {
    extend: "Ext.Container",
    xtype: 'impressumPage',
	
	config: {
	    layout: {
	        type: 'fit'
	    }
	},
	
	initialize: function () {
	    
		// Toolbar oben
	    var topToolbar = {
	        xtype: "toolbar",
	        title: 'Impressum',
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
                   '<div id="head">Angaben gemäß § 5 TMG:</div>',
       			   '<br /><h4>Kevin Weigand</h4>',
       			   '<h4>Wiesenstraße 14</h4>',
       			   '<h4>35390 Gießen</h4>',
       			   '<br /><h3>Kontakt:</h3>',
       			   '<h4>E-Mail: kevin.weigand@mni.thm.de</h4><br />',
       			   '<h5>Quelle: <a href="http://www.e-recht24.de">http://www.e-recht24.de</a></h5>',
                   '<br /><br /><div>',
                   '<span id="head">Haftung für Inhalte</strong></span>',
                   '<div id="blockText">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</div>',
                   '<br />',
                   '<span id="head">Haftung für Links</strong></span>',
                   '<div id="blockText">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</div>',
                   '<br />',
                   '<span id="head">Urheberrecht</strong></span>',
                   '<div id="blockText">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</div>',
                   '</div>'
               ].join("")
			
		};
	    this.add(topToolbar, panel);
	}
});