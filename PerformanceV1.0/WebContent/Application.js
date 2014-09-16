jQuery.sap.declare("Application");
jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {

	init : function() {

		//  set global models

		//  oModel = new sap.ui.model.odata.ODataModel("https://pgxmain.wdf.sap.corp/sap/opu/odata/sap/zcl_itsm_dbd_dp/");
		
			oModel = new sap.ui.model.odata.ODataModel("https://pgxmain.wdf.sap.corp/sap/opu/odata/sap/zcl_itsm_dbd_dp/");
	},

	main : function() {

		// create app view and put to html root element
		var root = this.getRoot();
		initialView=sap.ui.jsview("app", "performance.App");

		i18nModel = new sap.ui.model.resource.ResourceModel({ 
			bundleUrl : "i18n/messageBundle.properties" 
		}); 
		initialView.setModel(i18nModel, "i18n");

		initialView.placeAt(root);
	}
});