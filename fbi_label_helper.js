// Author: Tang Anh Huy (anhhuy.tang@lazada.com)
function overwriteFbiLabel() {
	var labelList = {};
	var skippedList = [ "Legends", "-" ];
	$(".table").each(function() {

	  if($(this).find("th:first").text() == "Legends") {
		$(this).find("tbody tr:first").find("td").each(function() {
		  if (skippedList.indexOf($(this).closest('table').find('th').eq($(this).index()).text()) == -1) {
			labelList[$(this).closest('table').find('th').eq($(this).index()).text()] = $(this).text();
		  }
		});
	  }
	  else {
		$(this).find('th').each(function() {
		  if(labelList[$(this).text()] != undefined) {
			$(this).text(labelList[$(this).text()]);
		  }
		});
	  }
	  
	});
}

overwriteFbiLabel();