// transform data dynamically
var createObject = function (id, prop, val) {
	var parts = prop.split(',');
	var last = {};
	
	// data transformation
	var items = [];
	var i = 0;
	
	for (i = 0; i < parts.length; i++) {
		var part = parts[i];
		last[part] = val['datas'][id]['fields'][part];
	};
	
	for (i = 0; i < last[parts[1]].length; i++) {
		var item = {
		};
	  
		for (j = 0; j < parts.length; j++) {
			var part = parts[j];
			item[part] = last[part][i];
		};	
		items.push(item);
	};
	alert("table complete");
	return items;
};