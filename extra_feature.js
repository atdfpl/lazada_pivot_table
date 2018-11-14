// Author: Tang Anh Huy (anhhuy.tang@lazada.com)
function LoadCommentBox(bridge, id_comment_box, box_height) {
    id_comment_box = "#" + id_comment_box;
    var id_comment_tab = "#T" + Math.ceil(Math.random()*1000000);
    var id_new_box = "#B" + Math.ceil(Math.random()*1000000);
    var element = $(id_comment_box).detach();
    bridge.container.innerHTML = "<div id='" + id_comment_tab.substring(1) + "'></div>";
    $(id_comment_tab).append(element);
    $(id_comment_box).attr("id",id_new_box.substring(1));
    $(id_new_box).css("display", "");
    $(id_new_box).css("width", "100%");
    $(id_new_box).css("max-height", box_height + "px");
    $(id_new_box + ' .fui-dialog-foot').remove();
    $(id_new_box + ' .fui-draggable').remove();
    $(id_new_box + ' .fui-dialog-close').remove();
    $(id_new_box).removeClass("fui-dialog");
    $(id_new_box).css("background-color", "#FFFFFF");
    $(id_new_box + ' ul:first').css("height", (box_height-90) + "px");
    $(id_new_box + ' button').wrap("<div id='sbox' style='min-height: 40px'></div>");
    $(id_new_box + ' #sbox').css("border-bottom", "1px solid #DDDDDD");
    $(id_new_box + ' button').css("float", "right");
    $(id_new_box + ' button').css("width", "130px");
}

function fillColor(colorPositive, colorNegative, reverseToken) {
	if ($(".pvtTable")[0]) {
		var isReversed = false;
		var txt = 'Target';
		var column = $('table tr th').filter(function() {
		$(".pvtTable th:contains('Target')").attr("id","targetCol");
		return $(this).text() === txt;
		}).index();
		if(column > -1) {                                           
			$(".pvtVal.col" + (column-1)).css('background-color', '#EEEEEE');
			var r = 0;
			while($(".pvtVal.row" + r + ".col0")[0]) {
				var target = parseFloat($(".pvtVal.row" + r + ".col" + (column-1)).text());
				if (isNaN(target)) {
				r += 1;
				continue;
				}
				for (c = 0; c < column-1; c++) {
					if (reverseToken != null && reverseToken != "" && c==0){
						var label = $(".pvtVal.row" + r + ".col" + c).prev().text();
						if (label.trim().slice(-1) == ".") {
							isReversed = true;
						}
						else {
							isReversed = false;
						}
					}

					var celltext = $(".pvtVal.row" + r + ".col" + c).text();
					var cellval = parseFloat(celltext);

					$(".pvtVal.row" + r + ".col" + (column-1)).css('background-color', '#EEEEEE');
					if (isNaN(cellval) || celltext == "") {
					  continue;
					}
					else if (cellval < target) {
					  $(".pvtVal.row" + r + ".col" + c).css("background-color", $("#btnHighlight").is(":checked") ? (isReversed ? colorPositive : colorNegative) : "#FFFFFF");
					}
					else {
					  $(".pvtVal.row" + r + ".col" + c).css("background-color", $("#btnHighlight").is(":checked") ? (isReversed ? colorNegative : colorPositive) : "#FFFFFF");
					}
				}
				r += 1;
			}
		}
	}
}

function formatNumber(format, colMinWidth, applyToken) {
	if (colMinWidth != null) {
	  $(".pvtTable th.pvtColLabel").css("min-width", colMinWidth + "px");
	}
	$(".pvtTable").find("tr").each(function() {
		var isApplied = false;
		if (applyToken != null && applyToken != "") {
			$(this).find('th').each(function() {
				if($(this).text().indexOf(applyToken) != -1) {
					isApplied = true;
				}
			});
		}
		else {
			isApplied = true;
		}
		
		if (isApplied) {
		  $(this).find('td').each(function() {
			  $(this).text(numeral($(this).text()).format(format));
		  });
		}
	});
}