// JavaScript Document
var cur_submenu_ul_id = null;
//var cur_submenu_id = null;
$(document).ready(function(e) {
	$('.animate-on-mousemove').mouseover(function(e) {
		var submenu_animated = $(this).closest('.submenu.animated');
		submenu_animated = submenu_animated[0];
		
		var cur_submenu_ul_id = submenu_animated.cur_submenu_ul_id;
		
		if(cur_submenu_ul_id != undefined)
		{
			$('#' + cur_submenu_ul_id).stop().fadeOut(200);
			cur_submenu_ul_id = undefined;
			//$(cur_submenu_id).css('background','url(../images/icons/arrow_blue.gif) no-repeat 15px 13px !important');
		}
		var id = $(this).attr('animate-to');
		if(id!='null')
		{
		$('#' + id).css('display','block');
		$('#' + id).css('width','0px');
		//$(this).css('background','url(../images/icons/arrow_blue.gif) #dc780a no-repeat 15px 13px !important');
		$('#' + id).stop().animate({width:500},500);
		cur_submenu_ul_id = id;
		}
		submenu_animated.cur_submenu_ul_id = cur_submenu_ul_id;
		//cur_submenu_id=this;
	});
	/*$('.animate-on-mousemove').mouseout(function(e) {
		var id = $(this).attr('animate-to');
		//$('#' + id).css('display','none');
		//$('#' + id).stop().animate({width:0},1000);
		//$('#' + id).stop().fadeOut(200);
	});*/
	/*$('.submenu-lvl-2').mousemove(function(e) {
		$('#' + cur_submenu_id).css('display','block');
	});*/
	/*$('.animated').mouseout(function(e) {
		if(cur_submenu_id!=null)
		{
			$('#' + cur_submenu_id).css('display','none');
		}
	});*/
	
	$(document).mousemove(function(e) {
		$('.submenu.animated').each(function(index, element) {
			var cur_submenu_ul_id = this.cur_submenu_ul_id;
			if( $(this).css('display') == 'none' && cur_submenu_ul_id != undefined )
			{
				$('#' + cur_submenu_ul_id).css('display','none');
				this.cur_submenu_ul_id = undefined;
			}
        });
		
	});
});