////////////////////////////////////////////////////
//Version: 	1.0
//Author:  	Richard Byard
//Usage:	Dynamic HTML iFrame window to alow for embedding dynamic content from 3rd party sources linked to selections in application.
//Date:		14 Sept 2017
////////////////////////////////////////////////////


define([
		'jquery'
		,'qlik'
		,'./properties/properties'
		,'./properties/initialProperties'
	], 
	
function( $, qlik, properties, initialProperties) {
	
	return {
			//Define the properties tab - these are defined in the properties.js file
            definition: properties,
			
			//Define the data properties - how many rows and columns to load.
			initialProperties: initialProperties,
			
			//Allow export to print object 
			support : { export: true 
			},
			
			//Not sure if there are any other options available here.
			snapshot: {cantTakeSnapshot: false
			},
			
			
						
	paint : function($element, layout) { 
			
			var runCount = 0;

			runCount = runCount+1;
				$element.html('<iframe width="100%" height="100%" frameborder="0" src="'+ layout.d_url+'" />') ;
				
		
		//needed for export
			return qlik.Promise.resolve();
		}	
	};
});
