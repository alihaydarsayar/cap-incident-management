sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/alihaydarsayar/incidents/test/integration/FirstJourney',
		'ns/alihaydarsayar/incidents/test/integration/pages/IncidentsList',
		'ns/alihaydarsayar/incidents/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/alihaydarsayar/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);