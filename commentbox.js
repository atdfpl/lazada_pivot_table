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