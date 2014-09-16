sap.ui.jsview("performance.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf dashbord.App
	*/ 
	getControllerName : function() {
		return "performance.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf dashbord.App
	*/ 
	createContent : function(oController) {
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App("App");
		
		// load the master page
		this.app.addPage(sap.ui.jsview("PerformanceSplitApp", "performance.PerformanceSplitApp"));
		
		// done
		return this.app;
	}

});