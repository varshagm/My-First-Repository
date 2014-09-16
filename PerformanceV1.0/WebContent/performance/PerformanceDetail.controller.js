sap.ui.controller("performance.PerformanceDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf performance.PerformanceDetail
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
		
		var oModel = new sap.ui.model.json.JSONModel();
		$.ajax({
			  url: 'model/mock.json',
			  method: 'GET',
			  dataType: 'json',
			  success: function(data){ 
			       // console.log(data); 
			        oModel.setData(data);
			       
			   
			      }
			     
			 
				});
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({

			dimensions : [ 
			              {
			            	  axis : 1,
			            	  name : 'Time(hour)',
			            	  value : "{time}"

			              }/*, 
			              { 
			            	 axis : 2, 
			            	name : 'Available', 
			            	value : "{availablePer}" 
			              } */ 

			             
			              ],

			 measures : [ 
			                         {
			                        	  name : 'Performance',
			                        	  value : '{availablePer}'
			                          },
			                         
			                          ],
          data : {
			                        	  path : "/PerformanceCollection/0/LineItems",
			                        	  factory : function() {}
			                          },
		
		 plotArea: {
	            'colorPalette': d3.scale.category20().range()
	        },
	        title: {
	            visible: true,
	            text: 'Total Product Sales by Unit Price'
	        }
		});
		
	this.byId("fioriLineChart").setDataset(oDataset.clone());
		//this.byId("sb100Chart").setDataset(oDataset.clone());

	 this.getView().byId("fioriLineChart").setModel(oModel);
				
				
			 
		}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf performance.PerformanceDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf performance.PerformanceDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf performance.PerformanceDetail
*/
//	onExit: function() {
//
//	}

});