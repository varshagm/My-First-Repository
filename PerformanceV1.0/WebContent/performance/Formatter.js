jQuery.sap.declare("Performance.performance.Formatter");

var userName="";
var busScenarioGlobal="";
Performance.performance.Formatter = {
 
		_statusStateColorMap : {
		"G" : "#008A3B",
		"R" : "#E52929",
		"Y" : "#F0AB00"
	},
	
	statusStateColor : function(value) {
		
		var map = Performance.performance.Formatter._statusStateColorMap;
		return (value && map[value]) ? map[value] : "#666666";
	},
	
};