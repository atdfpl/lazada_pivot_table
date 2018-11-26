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

$(".module-tabbar").find("li").click(function() {
	setTimeout(function(){ overwriteFbiLabel(); }, 500);
	setTimeout(function(){ overwriteFbiLabel(); }, 1000);
	setTimeout(function(){ overwriteFbiLabel(); }, 2000);
	setTimeout(function(){ overwriteFbiLabel(); }, 3000);
	setTimeout(function(){ overwriteFbiLabel(); }, 5000);
});

$(".section-header").find("button").click(function() {
	setTimeout(function(){ overwriteFbiLabel(); }, 500);
	setTimeout(function(){ overwriteFbiLabel(); }, 1000);
	setTimeout(function(){ overwriteFbiLabel(); }, 2000);
	setTimeout(function(){ overwriteFbiLabel(); }, 3000);
	setTimeout(function(){ overwriteFbiLabel(); }, 5000);
});

overwriteFbiLabel();