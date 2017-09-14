
define( [

	'jquery',
	'qlik',
	'ng!$q',
	'ng!$http'

], function ($, qlik, $q, $http) {
    'use strict';
	//Define the current application
	var app = qlik.currApp();

    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings"
    };
	
	
	// *****************************************************************************
    // Add Ons Section
    // *****************************************************************************
	var addOnsSection = {
		uses: "addons",
			items: {  
				  dataHandling: {  
					   uses: "dataHandling"  
					  }  
				 }  
	};
	
	
	// *****************************************************************************
    // Options Section
    // *****************************************************************************

	var d_url = {
			ref: "d_url",
			type: "string",
			label: "Dynamic URL format ='http://...' ",
			expression: "optional",
			defaultValue: ""
	};
	
	var Options = {
		type:"items",
		label:"Options",
		items: {
			d_url:d_url
		}
	};
	
	
    // *****************************************************************************
    // Main property panel definition
    // ~~
    // Only what's defined here will be returned from properties.js
    // *****************************************************************************
	  
	//******************************************************************************

    return {
        type: "items",
        component: "accordion",
        items: {
            Options: Options,
            appearance: appearanceSection,
			addons: addOnsSection

        }
    };

} );