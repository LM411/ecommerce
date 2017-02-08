// JavaScript Document

///////////Trim Function For Removing Leading and Trailing Space From Text  ///////////////////

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

String.prototype.repeat = function( num ) {
    return new Array( num + 1 ).join( this );
}
///////////End Trim Function For Removing Leading and Trailing Space From Text  ///////////////////

///////////Function For Capitalizing Text  ///////////////////

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

///////////End Function For Capitalizing Text  ///////////////////

///////////Function For Removing Break(<br>) From Text  ///////////////////

function replace_break(str,replace_str)
{
	return str.replace("<br>",replace_str).replace("<BR>",replace_str).replace("<br >",replace_str).replace("<br />",replace_str);
}

///////////End Function For Removing Break(<br>) From Text  ///////////////////

$.getScript("feedback_form/feedback_form.js");

$(document).ready(function(e) {

	var header2_form_pages ="[track-application.html][Schedule_an_Appointment.html]";
	var title="DHA Visa Information - South Africa -";
	
	var page_name;
                if(document.URL.indexOf("\\",document.URL.lastIndexOf("/"))!=-1)
				{
					//for IE
					if(document.URL.indexOf("#",document.URL.lastIndexOf("\\")+1)==-1)
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("\\")+1);					
					}
					else
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("\\")+1,document.URL.lastIndexOf("#"));
					}
				}
				else
				{
					//not for IE
					if(document.URL.indexOf("#",document.URL.lastIndexOf("/")+1)==-1)
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("/")+1);
					}
					else
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("/")+1,document.URL.lastIndexOf("#"));
					}
				}
				
				var is_home_page = page_name=='' || page_name.match(/^index.html$/i)!=null;
				var is_header2_form_pages = header2_form_pages.match(new RegExp("\\[" + page_name + "\\]","i")) != null;

///////////////////////////////////////////For Top Navigation////////////////////////////////////////////

                var nav_text='<div class="wrapper">\
      <ul>\
        <li><a href="index.html" class="pad_home home_active"><img src="images/home.png" alt=""></a></li>\
        <li class="type2"><a href="visa-types.html" class="visa">Visa<br>\
          Types</a>\
          <ul class="submenu2">\
            <li class="has_submenu"><a href="temporary-residence.html">TEMPORARY RESIDENCE VISA</a>\
              <ul>\
                <li class="has_submenu"><a href="work-visa.html">Work Visa</a>\
                  <ul>\
                    <li><a href="general-work-visa.html">General Work Visa</a></li>\
                    <li><a href="critical-skills-visa.html">Critical Skills Visa</a></li>\
                    <li><a href="corporate-work-visa.html">Corporate Work Visa</a></li>\
                    <li><a href="intra-company-transfer-work-visa.html">Intra Company Transfer Work Visa</a></li>\
                    <li><a href="treaty-visa.html">Treaty Visa</a></li>\
                    <li><a href="visitor-visa-section-1.html">Visitor\'s visa Section 11(1)(b)(I) Academic Sabbaticals</a></li>\
                    <li><a href="visitor-visa-section-2.html">Visitor\'s visa Section 11(1)(b)(II) Volunteer</a></li>\
                   <li><a href="visitor-visa-section-3.html">Visitor\'s visa Section 11(1)(b)(III) Research</a></li>\
                     <li><a href="visitor-11-2.html">Visitors 11(2)</a></li>\
                    <li><a href="exchange-visa.html">Exchange Visa (Work)</a></li>\
                    <li><a href="visitor-visa-11.html">Visitors Visa 11.6 (reside with SAC and work)</a></li>\
                  </ul>\
                </li>\
                <li class="has_submenu"><a href="holiday-visa.html">Holiday Visa</a>\
                  <ul class="single">\
                    <li><a href="visitor-visa-section-holiday.html">Visitor\'s visa Section 11(1)</a></li>\
                  </ul>\
                </li>\
                <li><a href="medical-visa.html">Medical Visa</a></li>\
                <li class="has_submenu"><a href="study-visa.html">Study Visa</a>\
                  <ul>\
                    <li><a href="study-visa-content.html">Study Visa</a></li>\
                    <li><a href="visitor-visa-section-study.html">Visitor\'s visa Section 11(1)(b)(III) Research</a></li>\
                    <li><a href="exchange-visa-student.html">Exchange Visa (Student)</a></li>\
                  </ul>\
                </li>\
                <li><a href="corporate-visa.html">Corporate Account</a></li>\
				<li><a href="retired-person-visa.html">Retired Person\'s Visa</a></li>\
                <li><a href="business-visa.html">Business Visa</a></li>\
                <li class="has_submenu"><a href="relative-visa.html">Relative Visa</a>\
                  <ul>\
                    <li><a href="relative-visa-content.html">Relative Visa</a></li>\
                    <li><a href="visitor-visa-section-relative.html">Visitors Visa Section 11(1)(b)(iv)</a></li>\
					<li><a href="visitor-visa-11.html">Visitors Visa 11.6 (reside with SAC and work)</a></li>\
                  </ul>\
                </li>\
                <li><a href="transfer-rectification.html">Transfer and Rectification of Temporary Resident Visa</a></li>\
              </ul>\
            </li>\
            <li class="has_submenu"><a href="permanent-residence-permit.html">PERMANENT RESIDENCE PERMIT</a>\
              <ul>\
                <li class="has_submenu"><a href="prp.html">PRP</a>\
                  <ul>\
                    <li><a href="worker-a-26.html">26(a)Worker</a></li>\
                    <li><a href="spouse.html">26(b)Spouse</a></li>\
                    <li><a href="dependent-c.html" title="26(C)Dependent (<18)">26 (C) Dependent (<18)</a></li>\
                    <li><a href="dependent-d.html">26(d)Dependent(> 21)</a></li>\
                    <li><a href="worker-a-27.html">27(a)Worker</a></li>\
                    <li><a href="extra-ordinary-skills.html">27(b)Extra ordinary skills</a></li>\
                    <li><a href="business.html">27(c)Business</a></li>\
                    <li><a href="refugee.html">27(d)Refugee</a></li>\
                    <li><a href="retired.html">27(e)Retired</a></li>\
                    <li><a href="financially-independent.html">27(f)Financially Independent</a></li>\
                    <li><a href="relative.html">27(g)Relative</a></li>\
                  </ul>\
                </li>\
                <li><a href="proof-residence.html">Proof of Permanent Residence</a></li>\
                <li><a href="rectification-residence.html">Rectifications on Permanent Residence</a></li>\
              </ul>\
            </li>\
            <li class="has_submenu"><a href="waivers.html">WAIVERS</a>\
              <ul>\
                <li><a href="prp-waiver.html">PRP Waiver</a></li>\
                <li><a href="trv-waiver.html">TRV Waiver</a></li>\
              </ul>\
            </li>\
            <li class="has_submenu"><a href="appeals.html">APPEALS</a>\
              <ul>\
                <li><a href="temporary-residence-appeal.html">Temporary Residence Appeal</a></li>\
                <li><a href="permanent-residence-appeal.html">Permanent Residence Appeal</a></li>\
              </ul>\
			  </li>\
            <li class="has_submenu"><a href="exemptions.html">EXEMPTIONS</a>\
              <ul>\
			  <li><a href="trv-exemptions.html">TRV Exemptions</a></li>\
                <li><a href="prp-exemptions.html">PRP Exemptions</a></li>\
              </ul>\
            </li>\
          </ul>\
        </li>\
       <li><a href="where-to-apply.html">Where to <br>apply</a></li>\
        <li><a href="complete-online-form.html">Complete Online<br> Form</a></li>\
        <li><a href="track-application.html" target="_blank">Track your<br>\
          Application</a></li>\
        <li><a href="general-information.html">General <br>\
          Information </a>\
          <div class="submenu" id="gen_info">\
            <div class="floatl">\
              <ul>\
                <li><a href="contact-us.html">Contact Us</a></li>\
                <li><a href="additional-service.html">Additional Services</a></li>\
                <li><a href="security-regulations.html">Security Regulations</a></li>\
                <li><a href="vfs-terms-and-conditions.html"><span class="caps">VFS</span> Terms and Conditions</a></li>\
                <li><a href="refund-policy.html">Refund Policy</a></li>\
                <li><a href="biometric-data-collection.html">Biometric Data Collection</a></li>\
                <li><a href="refund-process.html">Refund Process</a></li>\
                <li><a href="collection-of-decision.html">Collection of Decision</a></li>\
                <li><a href="public-holiday.html">Public Holidays / Closures</a></li>\
                <li><a href="useful-links.html">Useful and Important Links</a></li>\
				<li><a href="Replacement-of-South-African-Police-Clearance-Certificate-Procedure.html">Replacement of South African Police Clearance Certificate Procedure</a></li>\
				<li><a href="customer-experience.html">Customer Experience </a></li>\
              </ul>\
            </div>\
          </div>\
        </li>\
       <li><a href="dha-premium.html">DHA PREMIUM VISA AND PERMIT<br>\
          SERVICES CENTRE </a></li>\
        <li><a href="faqs.html">FAQs<br><br></a></li>\
      </ul>\
      <div class="clear"></div>\
    </div>';
                
                $("nav").html(nav_text);
	
///////////////////////////////////////////End For Top Navigation////////////////////////////////////////////	

///////////////////////////////////////////For HelpLine////////////////////////////////////////////

	////////////////////////////For Normal Helpline//////////////////////////////////////
	
        var helpline_text='<h3 class="c_blue caps marb15">Helpline </h3>\
        <ul class="helpline_a clearfix">\
          <li> <img src="images/icons/phone_big.png" alt="" class="floatl marr10">\
            <div class="floatl">\
              <p class="country_name caps"></p>\
              <p class="number">+27 (0)12 425 3000</p>\
            </div>\
          </li>\
          <li> <img src="images/icons/mail_big.gif" alt="" class="floatl marr10">\
            <div class="floatl">\
              <p class="country_name caps">Email id:</p>\
              <p class="country_name"><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#105;&#110;&#102;&#111;&#46;&#100;&#104;&#97;&#115;&#97;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;" class="c_orange">&#105;&#110;&#102;&#111;&#46;&#100;&#104;&#97;&#115;&#97;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;</a></p>\
            </div>\
          </li>\
		   <li> <img src="images/icons/mail_big.gif" alt="" class="floatl marr10">\
            <div class="floatl">\
              <p class="country_name caps">Feedback:</p>\
              <p class="country_name"><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#102;&#101;&#101;&#100;&#98;&#97;&#99;&#107;&#46;&#100;&#104;&#97;&#115;&#97;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;" class="c_orange">&#70;&#101;&#101;&#100;&#98;&#97;&#99;&#107;&#46;&#100;&#104;&#97;&#115;&#97;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;</a></p>\
            </div>\
          </li>\
        </ul>\
        <div class="clear"></div>'; 
		
	////////////////////////////////////////////End For Normal Helpline//////////////////////////////
	 
                $(".helpline").html(helpline_text);
				
	if(navigator.appName.indexOf("Internet Explorer")!=-1)
	{
		$('.helpline_a li:last').css('border-right-width','0px');
		$('#mycarousel_1 li:last').css('border-right-width','0px');
	}
	
///////////////////////////////////////////End For HelpLine////////////////////////////////////////////	

//////////////////////////////////////////////For Header//////////////////////////////////////////////////

		var header_text='<div class="wrapper">\
      <h1 class="floatl logo"> <a href="http://www.vfsglobal.com/" target="_blank"><img src="images/logo.png" alt=""></a> </h1>\
      <div class="floatr">\
        <div class="fsizer floatr"> <a fsizer_number="-1" id="fs_sml">A</a> <a fsizer_number="0" class="fsactive" id="fs_med">A+</a> <a fsizer_number="1" id="fs_lrg">A++</a></div>\
        <div class="clear"></div>\
        <div class="marb15 mart10">\
          <h3 class="floatl c_white">Department of Home Affairs</h3>\
          <div class="floatl flag"><a href="index.html"><img src="images/icons/south-africa.png" alt=""></a></div>\
          <h3 class="floatl c_white">In South Africa</h3>\
          <div class="clear"></div>\
        </div>\
        <div class="header_form floatr">\
		<!--<ul class="language_list floatr">\
        	<li>English</li>\
        	<li class="last_language"><a href="korean/index.html" target="_blank">한국어</a></li>\
        </ul>-->\
	<div id="search">\
            </div>\
        </div>\
        <div class="clear"></div>\
        <div class="responsive_nav_parent"> \
          <!--<select class="responsive_nav">\
            <option value="#">Menu</option>\
            <option value="index.html" selected>Home</option>\
            <option value="visa_types.html">Visa Types</option>\
           </select>--> \
        </div>\
      </div>\
      <div class="clear"></div>\
    </div>';
                
                $("header").html(header_text);

//////////////////////////////////////////////End For Header//////////////////////////////////////////////////

//////////////////////////////////////////For Search Textfield////////////////////////////////////////
	
	var banner_first_child = $($('.banner > .wrapper').children()[0]);
	banner_first_child.removeClass('padt20');
	
	var search_form_text = '<div class="floatr" id="search">\
        <form id="search_form" method="get" action="search.html">\
          <input type="text" placeholder="Search" id="search_text" name="search_text"/>\
        </form>\
      </div>\
      <div class="clear"></div>';
	
	banner_first_child.before(search_form_text);
	
	var serch_textfield = $('form#search_form input[type="text"]');
	var placeholder_text = serch_textfield.attr('placeholder');
	serch_textfield.removeAttr('placeholder');
	serch_textfield.attr('value',placeholder_text);
	serch_textfield.attr("onfocus","if (this.value == '" + placeholder_text + "') {this.value = '';}");
	serch_textfield.attr("onblur","if (this.value == '') {this.value = '" + placeholder_text + "';}");

//////////////////////////////////////////End For Search Textfield////////////////////////////////////////


//////////For header without search textbox and select language dropdown///////////
				
				if(is_header2_form_pages)
				{
					$("header .fsizer").css("display","none");
					$("header ul.language_list").css("display","none");
					$("header .header2").addClass("padt20");
					$("header .header2").removeClass("header2");
				}
				
//////////End For header without search textbox and select language dropdown///////////
				
//////////////////////////////////////////For Useful Links/////////////////////////////////////////////
	
	var useful_links_text='<h5 class="c_blue marb10"><a href="useful-links.html">Useful Links</a></h5>\
	<ul class="floatl marr20">\
		<li><a href="http://www.dha.gov.za/" target="_blank">Department of Home Affairs - HOME </a></li>\
	</ul>\
	<ul class="floatl marr20">\
		<li><a href="pdf/final-Immigration-Regulations-2014-1.pdf" target="_blank">Immigration Act 2002 (Act No.13 of 2002) </a></li>\
	</ul>\
	<ul class="floatl marr20">\
		<li><a href="pdf/Imm-Dir 29-2014-(SACBC)-120216.pdf" target="_blank">Immigration Directive 29 of 2014 (SACBC)</a></li>\
	</ul>\
	<ul class="floatl marr20">\
		<li><a href="pdf/Imm-dir-06015.pdf" target="_blank">Immigration Directive 12 of 2015</a></li>\
	</ul>\
	<ul class="floatl">\
		<li><a href="pdf/Imm-Dir-No-36-2014-(Critical Skills-120216.pdf" target="_blank">Immigration Directive 36 of 2014 – (Critical skills – Corporate Visas)</a></li>\
	</ul>';
                
                $(".usefulLinks").html(useful_links_text);
	
//////////////////////////////////////////End For Useful Links/////////////////////////////////////////////

///////////////////////////////////////////For Copyright///////////////////////////////////////////////

	if($('#copyright').length!=0)
	{
		$('#copyright').html(" &copy; VFS Global " + (new Date()).getFullYear() + ". All Rights Reserved<a class=\"acolor disclaimer_mobile marr15 marl15\" href=\"disclaimer-and-privacy-policy.html\"> Disclaimer and Privacy Policy</a><a class=\"acolor disclaimer_mobile marl10\" href=\"sitemap.html\">Sitemap</a> ");
	}
	else if($('#copyright_short').length!=0)
	{
		$('#copyright_short').html("&copy; VFS Global " + (new Date()).getFullYear() + ". All Rights Reserved");
	}
	
///////////////////////////////////////////End For Copyright///////////////////////////////////////////////	 

///////////For Changing Font Size On Click Of A,A+,A++  ///////////////////
	
	var fsizer_change_els = $('p, .list_ordered li, .list_style li, .table_template th, .table_template td');
	var fsizer_classes = new Array();
	$("a[fsizer_class]").each(function(index, element) {
		var fsizer_button = $(this);
		var fsizer_class = fsizer_button.attr("fsizer_class");
		if($.inArray(fsizer_class, fsizer_classes) == -1)
		{
			fsizer_classes.push(fsizer_class);
		}
	});
	$("a[fsizer_number]").click(function(e, allow_fsizer) {
        var fsizer_button = $(this);
		var fsizer_number = parseInt(fsizer_button.attr("fsizer_number"));
		if(!fsizer_button.hasClass("fs_disabled") && (!fsizer_button.hasClass("fsactive") || allow_fsizer == true))
		{
			$("a[fsizer_number]").removeClass("fsactive");
			fsizer_change_els.each(function(index, element) {
                var cur_fsizer_change_el = $(this);
				cur_fsizer_change_el.css("font-size","");
				var old_font_size = parseInt(cur_fsizer_change_el.css("font-size").replace("px",""));
				var new_font_size = old_font_size + fsizer_number;
				cur_fsizer_change_el.css("font-size", new_font_size + "px");
            });
			fsizer_button.addClass("fsactive");
		}
    });
	$("a[fsizer_number].fsactive").trigger('click', true);

///////////End For Changing Font Size On Click Of A,A+,A++  ///////////////////
	
/////////////For Page Title,Breadcrumb Text and Link, class for h1 and h2, home_active ///////////////////

	var middle_titles = null;
	
	//remove below comment only for languages
	
	/*middle_titles = [
	["short_term_visa.html","Short Term Visa"],
	["general_information.html","General Information"]
	];*/

                if(!is_home_page && !is_header2_form_pages)
                {
					 
					var parent_element;
					var heading_text;
					if($('section.banner h1').html()!=null)
					{
									parent_element = $('section.banner h1').parent();
									heading_text = $('section.banner h1').html();
					}
					else if($('section.banner h2').html()!=null)
					{
									parent_element = $('section.banner h2').parent();
									heading_text = $('section.banner h2').html();
					}
					else if($('section.banner h3').html()!=null)
					{
									parent_element = $('section.banner h3').parent();
									heading_text = $('section.banner h3').html();
					}
					parent_element.removeAttr('class');
					parent_element.attr('class','center text_center padt20');
					
					var bredcrumb_link_count = $(".breadcrumb").find("a").length;
					$(".breadcrumb").find("a").each(function(index, element) {
						var el = $(this);
						if(index==0)
						{
							el.attr("href","index.html");
							el.html("Home");
						}
						else if(index == bredcrumb_link_count - 1)
						{
							el.attr("href",page_name);
							el.html(toTitleCase(heading_text.replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' ')));
						}
						else
						{
							if(middle_titles!=null)
							{
								for(var i=0;i<middle_titles.length;i++)
								{
									if(el.attr('href').match(RegExp("^" + middle_titles[i][0] + "$","i")))
									{
										title += toTitleCase(middle_titles[i][1].replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' ')) + " - ";
									}
								}
							}
							else
							{
								title += toTitleCase(el.html().replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' ')) + " - ";
							}
							el.html(toTitleCase(el.html().replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' ')));
						}
					});
					
					
					title += toTitleCase(heading_text.replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' '));
					
					if($(".breadcrumb ul li:nth-child(3)").html()!=null)
					{	
						if($("nav li a[href]").filter(function() {
return RegExp("^" + $(".breadcrumb ul li:nth-child(3) a").attr("href") + "$","i").test($(this).attr("href"));
}).html()!=null)
						{
							var cur_element = $("nav li a[href]").filter(function() {
return RegExp("^" + $(".breadcrumb ul li:nth-child(3) a").attr("href") + "$","i").test($(this).attr("href"));
});
							$('nav li a').removeClass('home_active');
							$('nav li a').removeClass('active');
							cur_element.addClass('home_active');
						}
						else
						{
							$('nav li a').removeClass('home_active');
							$('nav li a').removeClass('active');
							$('nav li a[href]').filter(function() {
return RegExp("^index.html$","i").test($(this).attr("href"));
}).addClass('home_active');
						}
					}
					
					
					if($(".breadcrumb a[href]").filter(function() {
return RegExp("^general_information.html$","i").test($(this).attr("href"));
}).html()!=null)
					{
						if(page_name.match(/^where-to-apply.html$/i)==null)
						{
							$('.ico_active').removeClass('ico_active');
						}
					}
					
					if(page_name.match(/^faqs.html$/i)!=null)
					{		
						$('nav li a').removeClass('home_active');
						$('nav li a').removeClass('active');
						$('nav li a[href]').filter(function() {
return RegExp("^faqs.html$","i").test($(this).attr("href"));
}).addClass('home_active');
					}
					
					document.title = title.replace('&amp;','&').replace('&lt;','<').replace('&nbsp;',' ');
                }
				
/////////////End For Page Title,Breadcrumb Text and Link, class for h1 and h2, home_active ///////////////////
				
/////////////////////////////////////////For Submenu Capitalize Text  ////////////////////////////////////////

				$('.submenu').each(function(index, element) {
									var submenu_el = $(this);
									submenu_el.find('a').each(function(index, element) {
										var submenu_a_el = $(this);
										submenu_a_el.html(toTitleCase(submenu_a_el.html().replace('&amp;','&').replace('&nbsp;',' ')));
                                	});
								});
								
////////////////////////////////////End For Submenu Capitalize Text  ///////////////////////////////////
	
/////////////////////////////For Frequently Asked Questions and link tooltip  /////////////////////////
	
	$('nav a:not(.pad_home), .bottomLinks a, footer a').each(function(index, e){
	
		if($(this).attr('title')==undefined)
		{
			$(this).attr('title',replace_break($(this).html(), " ").replace("&nbsp;"," ").replace(/\s+/g,' ').trim());
		}
	
	});
	
////////////////////////////End For Frequently Asked Questions and link tooltip  ///////////////////////////
	
////////////////////////////////For General Information Box 4  ////////////////////////////////

                if($("#gen_Box4").length!=0)
                {
				var gen_count=$('#gen_info').find('a').length;
                var cur_gen_box4=0;
                var box4_str = "";
                if(gen_count>0)
                {
					box4_str += "<ul class=\"floatl marr20\">";
					$('#gen_info').find('a').each(function(){
									var el = $(this);
									if((cur_gen_box4==gen_count))
									{
										box4_str += "</ul>";
									}
									else
									{
										box4_str += "<li><a href=\"" + el.attr("href") + "\" title=\"" + el.attr('title') + "\">" + (el.attr('box4_str')==null?el.html():el.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";
									}
									cur_gen_box4++;
					});
					$("#gen_Box4").html(box4_str);
					cur_gen_box4=0;
                }
                }
				
////////////////////////////////End For General Information Box 4  ////////////////////////////////
                
////////////////////////////////For Visa Types Box 1  ///////////////////////////////////////
                
	   if($("#visa_types_box1").length!=0)
		{
			var box1_str = "";
			
			if($("#li_visa_types").length!=0)
			{
				var main_head = $('#li_visa_types a:first-child');
				box1_str += "<h3 class=\"c_blue caps\"><a href=\"" + main_head.attr('href') + "\" class=\"visa\" title=\"" + main_head.attr('title') + "\" >" + (main_head.attr('box1_str')==null?main_head.html():main_head.attr('box1_str')) + "</a></h3>";
				
				var has_submenu = true;
				if($('#li_visa_types').find('.submenu').length==0)
				{
					has_submenu = false;
				}
				
				if(has_submenu)
				{
					box1_str += "<div id=\"scrollbar_section\" class=\"scrollbar1\">";
					box1_str += "<div class=\"scrollbar\">";
					box1_str += "<div class=\"track\">";
					box1_str += "<div class=\"thumb\">";
					box1_str += "<div class=\"end\"></div>";
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "<div class=\"viewport\">";
					box1_str += "<div class=\"overview\">";
					
					var cur_submenu_head = 0;
					
					if($('#li_visa_types').find('.submenu_head a').length>0)
					{
						$('#li_visa_types').find('.submenu_head a').each(function(){
							var submenu_head = $(this);
							
							cur_submenu_head++;
							
							if(cur_submenu_head>1)
							{
								box1_str += "<br>";
							}
							
							box1_str += "<p class=\"visa_terms lineh19 marb5\" >";
							box1_str += "<a href=\"" + submenu_head.attr('href') + "\" class=\"c_orange\" title=\"" + submenu_head.attr('title') + "\" >" + (submenu_head.attr('box1_str')==null?submenu_head.html():submenu_head.attr('box1_str')) + "</a>";
							box1_str += "</p>";
							
							var ul_inner_submenu;
							if(submenu_head.attr('inner_submenu')==null)
							{
								ul_inner_submenu = $("#li_visa_types ul:nth-child(" + cur_submenu_head + ")");
							}
							else
							{
								ul_inner_submenu = $("#" + submenu_head.attr('inner_submenu'));
							}
							
							if(ul_inner_submenu!=null)
							{
								box1_str += "<ul class=\"visa_terms_ul\">";
								
								$(ul_inner_submenu).find('li a').each(function(){
									var inner_submenu = $(this);

									box1_str += "<li><a href=\"" + inner_submenu.attr('href') + "\" title=\"" + inner_submenu.attr('title') + "\" >" + (inner_submenu.attr('box1_str')==null?inner_submenu.html():inner_submenu.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";

								});
								
								box1_str += "</ul>";
							
							}
										
						});
					}
					else
					{
						box1_str += "<ul>";
						
						$("#li_visa_types ul").find('li a').each(function(){
							var inner_submenu = $(this);

							box1_str += "<li><a href=\"" + inner_submenu.attr('href') + "\" title=\"" + inner_submenu.attr('title') + "\" >" + (inner_submenu.attr('box1_str')==null?inner_submenu.html():inner_submenu.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";

						});
						
						box1_str += "</ul>";
					}
					
					box1_str += "<br>"
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "</div>";
				}
				
			}
			
			$("#visa_types_box1").html(box1_str);
		}
          
                
////////////////////////////////////End For Visa Types Box 1  ///////////////////////////////////	
	

///////////////////////////////////For Responsive Visa Types Tabs  ////////////////////////////////////

	/*Tabs*/
	$('.nav_visatypes_select').html('');
	$("<select />").appendTo(".nav_visatypes_select");

	$(".nav_visatypes a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("name"),
	     "text"    : el.text()
	 }).appendTo(".nav_visatypes_select select");
	});
	
	$(document).on('change','.nav_visatypes_select select',function(e, from_object){
		if(from_object == undefined || from_object==null)
		{
			var get_name = $(this).attr('value');
			$(".nav_visatypes_select select option[value]").removeAttr("selected");
			$(".nav_visatypes_select select option[value=\"" + get_name + "\"]").attr("selected","selected");
			$(".nav_visatypes a[name=\"" + get_name + "\"]").trigger("click",this);
		}
		return false;
	});
	
///////////////////////////////////End For Responsive Visa Types Tabs  ////////////////////////////////////

////////////////////////////////////For Visa Types Tab  //////////////////////////////////////

	$('.tourist_content').hide();
	$('.nav_visatypes li a').click(function(e, from_object){
		$('.nav_visatypes li a').removeClass('nav_active');
		var get_name = $(this).attr('name');
		
		$('.tourist_content').hide();
		$('#'+ get_name).show();	
		$(this).addClass('nav_active');
		
		if(from_object == undefined || from_object==null)
		{
			$(".nav_visatypes_select select option[value]").removeAttr("selected");
			$(".nav_visatypes_select select option[value=\"" + get_name + "\"]").attr("selected","selected");
			$(".nav_visatypes_select select").trigger('change',this);
		}
		
		var iframe = $('#'+ get_name).find("iframe[src^='https://www.google.com/maps/']");
		if(iframe.length!=0)
		{
			iframe.each(function(index, element) {
                if($(this).attr("loaded")!="true")
				{
					this.src = this.src;
					$(this).attr("loaded","true");
				}
            });
		}
		
		return false;
		
	});
	
	if($(".nav_visatypes").length!=0)
	{
		var docUrl = document.URL;
		var tab_name = "";
		
		if(docUrl.indexOf("#")!=-1)
			tab_name = docUrl.substring(docUrl.lastIndexOf("#") + 1);
		
		if(tab_name!="")
			$(".nav_visatypes a[name=\"" + tab_name + "\"]").trigger("click");
		else
			$('.nav_visatypes li:first-child a').trigger('click');
	}
	
////////////////////////////////////End For Visa Types Tab  //////////////////////////////////////
	
////////////////////////////////////For Responsive Menu and Blue Patch  ///////////////////////////////////

	/*Responsive*/
$('.r_step_content').html($('#stepOne').html());
	$('.responsive_nav_parent').html('');
	$("<select />").appendTo(".responsive_nav_parent").addClass('responsive_nav');

	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "#",
	   "text"    : "Menu"
	}).appendTo(".responsive_nav_parent select");

	// Populate dropdown with menu items
	$("nav a").each(function() {
	 var el = $(this);
	 var menu_text = el.text();
	 var parent_submenu = el.closest("div.submenu");
	 var has_parent_submenu = parent_submenu.length != 0;
	 var has_menu_type_2 = el.closest('ul').closest('li.type2').length != 0;
	 var is_submenu_link = has_parent_submenu || has_menu_type_2;
	 if( is_submenu_link )
	 {
	 	var prepend_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		 /*Begin if condition*/
		if(
		(
		(
		parent_submenu.find("a.visa-category-Sub-head").html()!=null
		||	parent_submenu.find('div.semibold').html()!=null
		||	parent_submenu.find('div.submenu_head').html()!=null
		)
		&&
		(
		! (
			el.hasClass("visa-category-Sub-head")
			||	el.parent("div.semibold").html()!=null
			||	el.parent("div.submenu_head").html()!=null
		  )
		)
		)
		||	
		(
		parent_submenu.find("table th").html()!=null
		&&	el.parent("th").html()==null
		)
		)
		/*Endf if condition*/
		{
			prepend_text = prepend_text + prepend_text + "--&nbsp;";
		}
		else if( has_menu_type_2 )
		{
			var submenu_level = el.parentsUntil('li.type2', 'ul').length;
			prepend_text = prepend_text.repeat(submenu_level) + '-'.repeat(submenu_level - 1);
		}
		
		menu_text = prepend_text + menu_text;
	 }
	 $(".responsive_nav_parent select").append("<option value=\"" + el.attr("href") + "\" >" + menu_text + "</option>");
	});
	$(".responsive_nav_parent select option:eq(1)").html('Home');
	if($('.responsive_nav_parent select option[value]').filter(function() {
   return RegExp("^" + page_name + "$","i").test($(this).attr("value"));
}).html()!=null)
	{
		$('.responsive_nav_parent select option[value]').filter(function() {
   return RegExp("^" + page_name + "$","i").test($(this).attr("value"));
}).attr('selected','selected');
		$('.responsive_nav_parent span:first').html($(".responsive_nav_parent select option[selected=\"selected\"]").html());	
	}
	else
	{
		$('.responsive_nav_parent select option:first-child').attr('selected','selected');
		$('.responsive_nav_parent span:first').html($('.responsive_nav_parent select option:first-child').html());	
	}
	
		$('.responsive_nav').change(function(){
			if($(this).val()!='#')
			{
				if($(this).find("option:selected").attr("target") == "_blank")
					window.open($(this).val());
				else
					window.location.href = 	$(this).val();
			}
		});

////////////////////////////////////End For Responsive Menu and Blue Patch  ///////////////////////////////////

//////////////////For Visa Types Tab Change On Click of link in same page////////////////////

	if($(".nav_visatypes").length!=0)
	{
		$("a.change_tab").click(function(e) {
            var el = $(this);
			var el_href = el.attr("href");
			if(el_href != undefined)
			{
				if(el_href.indexOf("#") != -1)
				{
					var tab_name = el_href.substring(el_href.lastIndexOf("#") + 1);
					$(".nav_visatypes a[name=\"" + tab_name + "\"]").trigger("click");
				}
			}
        });
	}

//////////////////End For Visa Types Tab Change On Click of link in same page////////////////////

///////////////////////For small scrollbar like in Visa Types Box 1,etc  //////////////////////////

	$('.scrollbar1, .scrollbar2').tinyscrollbar({sizethumb: 64});
	
///////////////////////End For small scrollbar like in Visa Types Box 1,etc  //////////////////////////

///////////////////////////////////For Visa Types Box(Box 1) Tab  /////////////////////////////////////////

	$('.tabs > p > a').click(function(){
		$('.tabs > p > a').removeClass('tab_active');	
		$('.scrollbar2').hide();
		$(this).addClass('tab_active');
		var get_tab = $(this).attr('name');
		$('#' + get_tab).show();			
	});
	$('.tabs p:first a').trigger('click');
	
///////////////////////////////////End Visa Types Box(Box 1) Tab  /////////////////////////////////////////

///////////////////////For custom design of dropdown,textbox,etc  //////////////////////////

    $("input, textarea, select, button").uniform();
	
///////////////////////End For custom design of dropdown,textbox,etc  //////////////////////////

///////////////////////For submenu show/hide  //////////////////////////

	$('nav ul > li').hover(
	function(){		
		$(this).find('.submenu').show();
	},
	function(){
		$(this).find('.submenu').hide();
	}
	);
	
///////////////////////End For submenu show/hide  //////////////////////////

///////////////////////For Scrollable Helpline  //////////////////////////

	$("#mycarousel").jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback
    });
	
///////////////////////End For Scrollable Helpline  //////////////////////////

///////////////////////For Top Button in Bottom-Right Corner  //////////////////////////
	
	 $(window).scroll(function(){
      if($(window).scrollTop()==0)
      {
        $('.up_top').fadeOut();
      }else
      {
        $('.up_top').fadeIn();
      }
    });
   
	$('.up_top a').click(function(){
		$('html, body').animate({scrollTop:0}, 500);
	});
	
///////////////////////End For Top Button in Bottom-Right Corner  //////////////////////////

/////////////////////////For Download Forms in  ////////////////////////////////////

	

	$('.form_list').change(function(){
		if($(this).val()!='#')
		{
			 window.open($(this).val());
		}
	});
	
/////////////////////////End For Download Forms in  ////////////////////////////////////
	
////////////////////////////////////For Random Banner///////////////////////////////////

	/*Random Banner*/
	
	var randomNumber = Math.floor((Math.random()*3)+1);
	if(randomNumber==1)
                {
                	$('.banner').css('background','url(images/banners/home_page-1.jpg) no-repeat top center');
                }else if(randomNumber==2)
                {
                	$('.banner').css('background','url(images/banners/home_page-2.jpg) no-repeat top center');
                }else if(randomNumber==3)
                {
                	$('.banner').css('background','url(images/banners/home_page-3.jpg) no-repeat top center');
                }else if(randomNumber==4)
                {
                                //$('.banner').addClass('bannerv6').removeClass('banner');
                }
				
////////////////////////////////////End For Random Banner///////////////////////////////////

////////////////////////////////////For Home Icon Hover//////////////////////////////////
	
	/*Home Icon hover*/
	$('.pad_home').not('.home_active').hover(function(){
		$(this).find('img').attr('src','images/home_white.png');
	},function(){
		$(this).find('img').attr('src','images/home.png');
	});
	$('.pad_home.home_active').find('img').attr('src','images/home_white.png');
	
////////////////////////////////////End For Home Icon Hover//////////////////////////////////

/////////////////////////For Select City/ Select Nearest Centres DropDown/////////////////////////

	$('.city_list').change(function(e) {
        var get_value = $(this).val();
		
		if(get_value!="#")
		{
			get_value = "#" + get_value;
			get_value= get_value.replace(" ", "");
			get_value = get_value.toLowerCase();
			window.location.href='where-to-apply.html'+get_value;
		}
		
	});
	
/////////////////////////End For Select City/ Select Nearest Centres DropDown/////////////////////////

//////////////////////////////////////////////For Responsive Circles///////////////////////////////////////////

$(".home_step_responsive .ico a").removeClass('ico_active');
$(".steps ul.step_icons").find('li.ico').each(function(index, element) {
    var el = $(this);
	
	if(el.find('a').hasClass('ico_active'))
	{
		$(".home_step_responsive .ico.step0" + (index + 1) + " a").addClass('ico_active');
	}

    });
	
///////////////////////////////////////////End For Responsive Circles/////////////////////////////////////////

	/////////////////////////////////////sitemap////////////////////////////////////////////////////////
	
	if($("ul.sitemap").length!=0)
	{
	// extra_links variable format given below
	// Page Url, Text, Title(give null if title is same as text), Target(give null if dont want to set target)
	var extra_links = [  
						["visa-fees-at-glance.html", "Visa Fees At Glance" , null, null],
						["news.html", "News And Updates" , null, null]
					  ];
	var current_sitemap_li = null;
	var current_sitemap_li_a = null;
	var current_sitemap_submenu = null;
	var current_sitemap_inner_submenu = null;
	var link_text = null;
	$("nav a").each(function(index, element) {
		var nav_a = $(this);
		var duplicate_nav_a_no = $("nav a").filter(function() {
   return RegExp("^" + replace_break(nav_a.html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' ').replace("(","\\(").replace(")","\\)") + "$","i").test(replace_break($(this).html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' '));
}).length;
		if(((duplicate_nav_a_no==1) || (nav_a.closest("div.submenu").length!=0)) && (nav_a.closest("ul.submenu2").length==0))
		{
			link_text = "<li id=\"current_sitemap_li\"><a" + (nav_a.attr("href")!=null?" href=\"" + nav_a.attr("href") + "\"":"") + (nav_a.attr("title")!=null?" title=\"" + nav_a.attr("title") + "\"":"") + (nav_a.attr("target")!=null?" target=\"" + nav_a.attr("target") + "\"":"") + ">" + nav_a.html() + "</a></li>";
			var nav_submenu_el = nav_a.closest(".submenu");
			var is_submenu_head = ((nav_submenu_el.length!=0) 
				&& 
				(nav_a.hasClass("visa-category-Sub-head") 
				||	nav_a.parent("div.semibold, div.submenu_head, th").length!=0)
				);
			var after_submenu_head = false;
			if(nav_submenu_el.length!=0 && !is_submenu_head)
			{
				after_submenu_head = nav_submenu_el.find("a.visa-category-Sub-head, div.semibold, div.submenu_head, th").length!=0;
			}
			if(nav_a.closest("div.submenu").length==0)
			{
				$("ul.sitemap").append(link_text);
			}
			else if(!after_submenu_head)
			{
				current_sitemap_submenu.append(link_text);
			}
			else
			{
				if(current_sitemap_inner_submenu==null)
				{
					current_sitemap_submenu.append("<li class=\"no_back\"><ul></ul></li>");
					current_sitemap_inner_submenu = current_sitemap_submenu.find("li ul");
				}
				current_sitemap_inner_submenu.append(link_text);
			}
			current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
			current_sitemap_li.removeAttr("id");
			current_sitemap_li_a = current_sitemap_li.find("a");
			if(nav_a.closest("li").find("div.submenu").length != 0 && !is_submenu_head)
			{
				current_sitemap_li.append("<ul></ul>");
				current_sitemap_submenu = current_sitemap_li.find("ul");
			}
			else if(is_submenu_head)
			{
				current_sitemap_li_a.addClass("submenu_head");
				current_sitemap_li.append("<ul></ul>");
				current_sitemap_inner_submenu = current_sitemap_li.find("ul");
			} 
			if(current_sitemap_li_a.attr("href").match(/^index.html$/i)!=null)
			{
				var home_page_link_text = $(".breadcrumb ul li a[href]").filter(function() {
   return RegExp("^index.html$","i").test($(this).attr("href"));
}).html();
				current_sitemap_li_a.html(home_page_link_text);
			}
			current_sitemap_li_a.html(replace_break(current_sitemap_li_a.html().trim()," ").replace(/\s+/g,' '));
		}
		else
		{
			var nav_a_parent_lis = nav_a.parentsUntil('ul.submenu2', 'li');
			var cur_sitemap_sub_li = current_sitemap_li;
			var cur_sitemap_ul = cur_sitemap_sub_li.children('ul');
			
			for( var i = 0 ; i < nav_a_parent_lis.length - 1 ; i++ )
			{
				cur_sitemap_sub_li = $(cur_sitemap_ul.children('li')[$(nav_a_parent_lis[nav_a_parent_lis.length - 1 - i]).index()]);
				cur_sitemap_ul = cur_sitemap_sub_li.children('ul');
			}
			
			if( cur_sitemap_ul.length == 0 )
			{
				cur_sitemap_sub_li.append('<ul></ul>');
				cur_sitemap_ul = cur_sitemap_sub_li.children('ul');
			}
			
			cur_sitemap_ul.append('<li><a' + (nav_a.attr('href')!=null?' href="' + nav_a.attr('href') + '"':'') + (nav_a.attr('title')!=null?' title="' + nav_a.attr('title') + '"':'') + (nav_a.attr('target')!=null?' target="' + nav_a.attr('target') + '"':'') + '>' + nav_a.html() + '</a></li>');
		}
    });
	$("ul.step_icons li").each(function(index, element) {
        var step_icons_li = $(this);
		var step_icons_li_a = step_icons_li.find("a");
		if(step_icons_li_a.length != 0)
		{
			if($("ul.sitemap li a").filter(function() {
	   return RegExp("^" + step_icons_li_a.attr("href") + "$","i").test($(this).attr("href"));
	}).length == 0)
			{
				link_text = "<li id=\"current_sitemap_li\"><a" + (step_icons_li_a.attr("href")!=null?" href=\"" + step_icons_li_a.attr("href") + "\"":"") + (step_icons_li_a.attr("title")!=null?" title=\"" + step_icons_li_a.attr("title") + "\"":"") + (step_icons_li_a.attr("target")!=null?" target=\"" + step_icons_li_a.attr("target") + "\"":"") + "></a></li>";
				$("ul.sitemap").append(link_text);
				current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
				current_sitemap_li.removeAttr("id");
				current_sitemap_li_a = current_sitemap_li.find("a");
				current_sitemap_li_a.html(step_icons_li_a.attr("language_text")==null?step_icons_li_a.attr("title"):step_icons_li_a.attr("language_text"));
			}
		}
    });
	for(var i=0; i<extra_links.length; i++)
	{
		link_text = "<li><a href=\"" + extra_links[i][0] + "\" title=\"" + (extra_links[i][2]==null?extra_links[i][1]:extra_links[i][2]) + "\"" + (extra_links[i][3]!=null?" target=\"" + extra_links[i][3] + "\"":"") + " >" + extra_links[i][1] + "</a></li>";
		$("ul.sitemap").append(link_text);
	}
	$("#copyright a").each(function(index, element) {
        var copyright_a = $(this);
		if(copyright_a.attr("href").match(new RegExp("^" + page_name + "$","i"))==null)
		{
			link_text = "<li id=\"current_sitemap_li\"><a" + (copyright_a.attr("href")!=null?" href=\"" + copyright_a.attr("href") + "\"":"") + (copyright_a.attr("title")!=null?" title=\"" + copyright_a.attr("title") + "\"":"") + (copyright_a.attr("target")!=null?" target=\"" + copyright_a.attr("target") + "\"":"") + ">" + copyright_a.html() + "</a></li>";
			$("ul.sitemap").append(link_text);
			current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
			current_sitemap_li.removeAttr("id");
			current_sitemap_li_a = current_sitemap_li.find("a");
			current_sitemap_li_a.html(replace_break(current_sitemap_li_a.html().trim()," ").replace(/\s+/g,' '));
		}
    });
	if(navigator.appName.indexOf("Internet Explorer")!=-1)
	{
		$("ul.sitemap li:last-child").css("border-bottom","none");
		$("ul.sitemap li ul li:last-child ul").css("margin-bottom","0px");
	}
	}
	
	/////////////////////////////////////end sitemap////////////////////////////////////////////////////////
	
	/////////////////////////////////////Quicklinks//////////////////////////////////////////////////////
	
	if($(".quickLinks").length!=0)
	{
	var quicklinks_heading = "Quick Links";
	var total_quicklinks_ul = 5;
	var all_max_links_in_ul = new Array();
	//all_max_links_in_ul[4] = 3;
	var set_row_height = true;
	var all_rows_height = new Array();
	all_rows_height[1] = false;
	//all_rows_height[1] = 20;
	
	var new_quicklinks = new Array();
	var new_quicklinks_length = 0;
	$("nav a").each(function(index, element) {
        var nav_a = $(this);
		var is_in_submenu2 = nav_a.closest(".submenu2").length != 0;
		var is_in_submenu = nav_a.closest(".submenu").length != 0 || is_in_submenu2;
		var is_in_general_submenu = false;
		var is_in_array = $(new_quicklinks).filter(function(index) {
            return RegExp("^" + replace_break(nav_a.html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' ').replace("(","\\(").replace(")","\\)") + "$","i").test(replace_break($(this).html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' '));
        }).length != 0;
		if(is_in_submenu && !is_in_submenu2)
		{
			is_in_general_submenu = $(nav_a.closest(".submenu").closest("li").find("a")[0]).attr("href").match(/^general_information.html$/i) != null;
		}
		var add_link = (
							!is_in_submenu
							||
							is_in_general_submenu
						)
						&& nav_a.attr("href").match(/^index.html$/i) == null
						&& nav_a.attr("href").match(/^general_information.html$/i) == null
						&& nav_a.attr("href").match(/^useful_links.html$/i) == null
						&& !is_in_array;
		if(add_link)
		{
			new_quicklinks[new_quicklinks_length] = nav_a;
			new_quicklinks_length++;
		}
    });
	var all_quicklinks_ul = new Array();
	var links_in_quicklinks_ul = new Array();
	$(".quickLinks").html("<h5 class=\"c_blue marb10\">" + quicklinks_heading + "</h5>");
	var temp_links_added = 0;
	for(var i=0; i<total_quicklinks_ul; i++)
	{
		$(".quickLinks").append("<ul id=\"cur_quicklinks_ul\" class=\"floatl" + (i < total_quicklinks_ul - 1 ? " marr20" : "") + "\"></ul>");
		var cur_quicklinks_ul = $(".quickLinks").find("ul#cur_quicklinks_ul");
		all_quicklinks_ul.push(cur_quicklinks_ul);
		links_in_quicklinks_ul.push(0);
		cur_quicklinks_ul.removeAttr("id");
		all_max_links_in_ul[i] = (all_max_links_in_ul[i] == null) ? (Math.ceil((new_quicklinks_length - temp_links_added) / (total_quicklinks_ul - i))) : (all_max_links_in_ul[i]);
		temp_links_added += all_max_links_in_ul[i];
	}
	var ul_position = 0;
	var link_text = null;
	var checking_in_ul = 0;
	var no_of_rows = 0;
	for(var i=0; i<new_quicklinks_length; i++)
	{
		if(links_in_quicklinks_ul[ul_position] < all_max_links_in_ul[ul_position])
		{
			link_text = "<li><a" + (new_quicklinks[i].attr("href")!=null?" href=\"" + new_quicklinks[i].attr("href") + "\"":"") + (new_quicklinks[i].attr("title")!=null?" title=\"" + toTitleCase(new_quicklinks[i].attr("title")) + "\"":"") + (new_quicklinks[i].attr("target")!=null?" target=\"" + new_quicklinks[i].attr("target") + "\"":"") + ">" + toTitleCase(new_quicklinks[i].attr("title")) + "</a></li>";
			all_quicklinks_ul[ul_position].append(link_text);
			links_in_quicklinks_ul[ul_position]++;
			no_of_rows = no_of_rows < links_in_quicklinks_ul[ul_position] ? links_in_quicklinks_ul[ul_position] : no_of_rows;
			ul_position = (((ul_position + 1) == total_quicklinks_ul) ? 0 : (ul_position + 1));
			checking_in_ul = 0;
		}
		else
		{
			if(checking_in_ul<total_quicklinks_ul - 1)
			{
				ul_position = (((ul_position + 1) == total_quicklinks_ul) ? 0 : (ul_position + 1));
				i--;
				checking_in_ul++;
			}
			else
			{
				break;
			}
		}
	}
	
	if(set_row_height)
	{
		$(window).load(function(e) {
			set_quicklinks_row_height(no_of_rows, all_rows_height);
		});
		$(window).resize(function(e) {
            set_quicklinks_row_height(no_of_rows, all_rows_height);
			var current_fsizer = $("a[fsizer_number].fsactive")
			current_fsizer.removeClass("fsactive");
			current_fsizer.click();
        });
	}
	
	}
	
	/////////////////////////////////////end Quicklinks///////////////////////////////////////////////////
	
	/////////////////////For use class semibold where font-weight:bold is found////////////////
	
	$("body *").each(function(index, element) {
        var el = $(this);
		var el_tag = el.prop("tagName").toUpperCase();
		if(!el.hasClass("dont_convert"))
		{
			if(el_tag == "STRONG" || el_tag == "B")
			{
				el.replaceWith("<span class=\"semibold\">" + el.html() + "</span>");
			}
			else if(el.css("font-weight") == "bold" || el.css("font-weight") == "bolder" || parseFloat(el.css("font-weight")) >= 600)
			{
				el.contents().filter(function(index) {
					return this.nodeType === 3;
				}).each(function(index, element) {
					$(this).wrap("<span class=\"semibold\"></span>");
				});
			}
		}
    });
	
	/////////////////////End For use class semibold where font-weight:bold is found////////////////

});

/////////////////////////////////////For Quicklinks Row Height////////////////////////////////////////

function set_quicklinks_row_height(no_of_rows, all_rows_height)
{
	var quicklinks_row_max_height;
	var set_row_height;
	for( var i = 0 ; i < no_of_rows ; i++ )
	{
		set_row_height = parseInt($(".wrapper").css("width")) > 300 && ( all_rows_height[i] == true || all_rows_height[i] == undefined || ( !isNaN(all_rows_height[i]) && all_rows_height[i] != false ) );
		if(set_row_height)
		{
			quicklinks_row_max_height = 0;
			if(!isNaN(all_rows_height[i]))
			{
				quicklinks_row_max_height = all_rows_height[i];
			}
			else
			{
				$(".quickLinks ul").each(function(index, element) {
					var cur_ul = $(this);
					var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
					if(cur_li.length != 0)
					{
						cur_li.css('height','auto');
						quicklinks_row_max_height = quicklinks_row_max_height < cur_li.outerHeight() ? cur_li.outerHeight() : quicklinks_row_max_height;
					}
				});
			}
			
			$(".quickLinks ul").each(function(index, element) {
				var cur_ul = $(this);
				var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
				if(cur_li.length != 0)
				{
					cur_li.css("height", quicklinks_row_max_height + "px");
				}
			});
		}
		else
		{
			$(".quickLinks ul").each(function(index, element) {
				var cur_ul = $(this);
				var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
				if(cur_li.length != 0)
				{
					cur_li.css("height", "auto");
				}
			});
		}
	}
}

/////////////////////////////////////End For Quicklinks Row Height////////////////////////////////////////

/////////////////////////////Function For Scrollable Helpline  //////////////////////////////////////

function mycarousel_initCallback(carousel) {
	$('.jcarousel-control a:eq(0)').addClass('thumb_active');
    $('.jcarousel-control a').bind('click', function() {
		$('.jcarousel-control a').removeClass('thumb_active');
		$(this).addClass('thumb_active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('id'))
		);
        return false;
    });
	
};

////////////////////////////End Function For Scrollable Helpline  ////////////////////////////////////
$(document).ready(function(e) {
	initialize_banner_values();
	animate_banner();


});
function initialize_banner_values()
{
	we_are_moving_initial_left = parseFloat($(".moving_banner .we_are_moving").css('left'));
	truck_initial_left = parseFloat($(".moving_banner .truck_image").css('left'));
	outer_address_initial_left = parseFloat($(".moving_banner .outer_address").css('left'));
	address_initial_width = parseFloat($(".moving_banner .address").css('width'));
}

function animate_banner()
{
	var truck_animate_duration = 6000;
	var truck_animate_left = 10;
	var we_are_moving_animate_left = truck_animate_left + we_are_moving_initial_left - truck_initial_left;
	var outer_address_animate_left = outer_address_initial_left;
	var outer_address_left = outer_address_animate_left + address_initial_width;
	var address_left = address_initial_width * -1;
	var address_animate_left = 0;
	var outer_address_animate_width = address_initial_width;
	var address_animate_duration = (address_initial_width * truck_animate_duration)/(truck_initial_left - truck_animate_left);
	
	$(".moving_banner .truck_image").css("left",truck_initial_left + "px");
	$(".moving_banner .we_are_moving").css("left",we_are_moving_initial_left + "px");
	$(".moving_banner .outer_address").css("left",outer_address_left + "px");
	$(".moving_banner .address").css("left",address_left + "px");
	
	$(".moving_banner .truck_image").animate({left:truck_animate_left},truck_animate_duration,'linear');
	$(".moving_banner .we_are_moving").animate({left:we_are_moving_animate_left},truck_animate_duration,'linear');
	$(".moving_banner .outer_address").animate({left:outer_address_animate_left,width:outer_address_animate_width},address_animate_duration,'linear');
	$(".moving_banner .address").animate({left:address_animate_left},address_animate_duration,'linear');
////////////////////////////////////////////Responsive////////////////////////////////////////////////
	var responsive_we_are_moving_left = parseFloat($(".responsive_moving_banner .we_are_moving").css("width")) * -1;
	var responsive_we_are_moving_animate_left = 0;
	var responsive_address_left = parseFloat($(".responsive_moving_banner .address").css("width"));
	var responsive_address_animate_left = 0;
	
	$(".responsive_moving_banner .we_are_moving").css("left",responsive_we_are_moving_left + "px");
	$(".responsive_moving_banner .we_are_moving").css("display","block");
	$(".responsive_moving_banner .address").css("left",responsive_address_left + "px");
	$(".responsive_moving_banner .address").css("display","block");
	
	$(".responsive_moving_banner .we_are_moving").animate({left:responsive_we_are_moving_animate_left},1000,function()
	{
		$(".responsive_moving_banner .address").animate({left:responsive_we_are_moving_animate_left},1000);
	});
	
	
	setTimeout(function()
	{
		animate_banner();
	},30000);
}

$(window).load(function(e) {

///////////////////////For New Box Banner///////////////////////////////////
	
	if( $("#cycle_banner_wrapper1 .cycle_banner").length != 0 )
	{
		$("#cycle_banner_wrapper1 .cycle_banner").cycle({
			fx: 'scrollLeft',
			timeout: 5000,
			speed: 700,
			pager: '#cycle_banner_wrapper1 .cycle_pager',
			pagerAnchorBuilder: function(index, DOMelement) {
				var pagerAnchor = $('<a>');
				pagerAnchor.attr('href', '#');
				
				if( index == this.elements.length - 1 )
					pagerAnchor.addClass('last');
				
				return pagerAnchor;
			}
		});
	}

///////////////////////End For New Box Banner///////////////////////////////////

///////////////////////For New Bottom Banner///////////////////////////////////
	
	if( $("#cycle_banner_wrapper2 .cycle_banner").length != 0 )
	{
		$("#cycle_banner_wrapper2 .cycle_banner").cycle({
			fx: 'scrollLeft',
			timeout: 5000,
			speed: 700,
			pager: '#cycle_banner_wrapper2 .cycle_pager',
			pagerAnchorBuilder: function(index, DOMelement) {
				var pagerAnchor = $('<a>');
				pagerAnchor.attr('href', '#');
				
				if( index == this.elements.length - 1 )
					pagerAnchor.addClass('last');
				
				return pagerAnchor;
			}
		});
	}

///////////////////////End For New Bottom Banner///////////////////////////////////

});