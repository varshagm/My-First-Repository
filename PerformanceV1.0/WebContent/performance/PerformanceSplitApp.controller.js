sap.ui.controller("performance.PerformanceSplitApp", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf performance.PerformanceSplitApp
*/
	onInit: function() {



		this.getView().addEventDelegate({
			onBeforeShow : jQuery.proxy(function(evt) {

				this.onBeforeShow(evt);
			},this)
		});
		that=this.getView();
	
	},
	
	onBeforeShow : function(evt) {
		
		bus_scenario=  window.location.search.substring(1);
		bus_scenario=(bus_scenario.split("="))[0].trim();
		var availJsonModel= new sap.ui.model.json.JSONModel();
		//alert("Hi.....");
		oModel.read("BusScnCollection('"+bus_scenario+"')?$expand=Parameters",null, null, true,function(data,response){
			availJsonModel.setData(data);  
			console.log(data);
			
			
			var data1={};
			var results=[];				
            for( var i = 0; i<data.Parameters.results.length; i++ ){
            	if(data.Parameters.results[i].PARAMETER_NAME == "Performance")
            	{
            		results.push(data.Parameters.results[i]);
            	}
            }
            data1["results"]=results;
   			
            
            
          //***************************************Processing JSON Data for Availabilty and Performance*******************************                
          				var jsonData = "{ \"results\" : [ ";
                          for( var i = 0; i<data1.results.length; i++ ){
                          	if(data1.results[i].PARAMETER_NAME == "Performance"){                            
                          		jsonData += "{ \"parameter_name\" : \""+data1.results[i].PARAMETER_NAME+"\",";                            
                          		jsonData += " \"items\" : [ ";                        
                              
                              	var params = data1.results[i].VALUE.split(";");
                              	for( var j = 0; j<params.length; j++ ){
                              		
                              		var paraValues = params[j].split("#");                            	
                              		jsonData += "{ \"key\" : \""+paraValues[0]+"\", ";
                              		jsonData += "\"color\" : \""+paraValues[2]+"\", ";
                              		jsonData += "\"status\" : \""+paraValues[1]+"\"";
                              		jsonData += " }";
                              		if(j != params.length-1){
                              			jsonData +=",";
                              		}
                              		
                              	}
                              	jsonData += " ] } ";
                              	if(i != data1.results.length-1){
                          			jsonData +=",";
                          		}
                          	}
                          	
                          }
                      	jsonData += " ] } ";
                      	
                      	console.log(jsonData);
                      	var json = JSON.parse(jsonData);
                      	availJsonModel.setData(json);
                      	console.log(availJsonModel.getData());
                      	that.setModel(availJsonModel);
			
		});
		
		
		
		
		
		
	
    	
	
	},
to : function (pageId, context) {
		
		var sysID = context.getProperty("key");
		var title = "System Performance - " + sysID;
		this.getView().splitapp.getPage("PerformanceDetail").byId("idDetailPage").setTitle(title);
		//var app1 = this.getView().splitapp;
		/*var app1 = this.getView().splitapp;


		var busProcess=context.getProperty("Bus_Process");
		var busProcess1=busProcess.replace("&","%26");
		var busScenario=context.getProperty("Bus_Scenario");

		var BusSceJsonModel1 = new sap.ui.model.json.JSONModel();

		oModel.read("JobMonitorCollection?$filter=BUS_SCENARIO eq '"+busScenario+"' and BUSINESS_PROCESS eq '"+busProcess1+"'",null, null, true,function(data,response){

			BusSceJsonModel1.setData(data);    	
			//console.log(data);


		});


		app1.getPage(pageId).byId("JobsTable").setModel(BusSceJsonModel1);

		// show the page
		app1.to(pageId);*/
		
		

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf performance.PerformanceSplitApp
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf performance.PerformanceSplitApp
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf performance.PerformanceSplitApp
*/
//	onExit: function() {
//
//	}

});