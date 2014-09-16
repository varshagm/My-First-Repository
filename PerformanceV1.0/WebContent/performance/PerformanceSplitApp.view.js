sap.ui.jsview("performance.PerformanceSplitApp", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf performance.PerformanceSplitApp
	*/ 
	getControllerName : function() {
		return "performance.PerformanceSplitApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf performance.PerformanceSplitApp
	*/ 
	createContent : function(oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create app
		this.splitapp = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("PerformanceMaster", "performance.PerformanceMaster");
		master.getController().nav = this.getController();
		this.splitapp.addPage(master, true);

		// load the empty page
		var detail = sap.ui.xmlview("PerformanceDetail", "performance.PerformanceDetail");
		detail.getController().nav = this.getController();
		this.splitapp.addPage(detail, false);
		
		
 		return new sap.m.Page({
			title: "Title",
			showHeader:false,
			content: [
			          this.splitapp
			]
		});
	}

});