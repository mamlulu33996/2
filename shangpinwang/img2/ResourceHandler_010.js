﻿$(function(){$("input[type=radio][gotourl]").bind({change:function(){var u=$(this).parentsUntil("a").last().parent();location.href=$(u).attr("href")}});var c=$("#spList-fnarea"),d=$("#spList-right");$(window).scroll(function(){var u=$(this),v=u.scrollTop();if(v>=d.offset().top){c.addClass("spList_fnarea_fixed");$(".spProduct_listbox").css("padding-top","122px")}else{c.removeClass("spList_fnarea_fixed");$(".spProduct_listbox").css("padding-top","0")}});$(".filter_brand_tag dd").delegate("a","click",function(){$(this).addClass("cur").siblings("a").removeClass("cur");var u=window.location.href;window.location.href=u.split("#")[0]+$(this).attr("href");return false});$(".list_filter_brand > .filter_menu").css({visibility:"visible",display:"none"});var a=$("li.list_filter_cn"),b=$("li.list_filter_order");a.find("span").click(function(){var u=$(this).closest(".list_filter_cn");if(u.hasClass("on")){u.find(".filter_menu").hide();u.removeClass("on")}else{$("li.list_filter_cn.on").removeClass("on").find(".filter_menu").hide();u.find(".filter_menu").show();u.addClass("on")}return false});$(".sp_body:not(.list_filter_cn)").click(function(){if(a.hasClass("on")){$("li.list_filter_cn.on").find(".filter_menu").hide();$("li.list_filter_cn.on").removeClass("on")}});var r=0;var f=j()[0]==null?"":j()[0];var h=j()[1]==null?"":j()[1];var s=j()[2]==null?"":j()[2];var p=j()[3]==null?"":j()[3];var t=j()[6]==null?"":j()[6];var n=j()[7]==null?"":j()[7];var g=window.location.search;$("li.list_filter_cn:not(.list_filter_order)").find("li").delegate("a","click",function(){var u=$(this).attr("stype");switch(u){case"brand":f=$(this).attr("brandno");break;case"color":h=$(this).attr("colorid");break;case"size":s=$(this).attr("sizeno");break;case"price":p=$(this).attr("priceno");break;case"style":t=$(this).attr("styleno")}if(u!=null){var v=m();if(v.length>1){if(v.substring(v.length-1,v.length)=="-"){v=v.substring(0,v.length-1)}}v=v.replace("/-","/all-");window.location.href=v}return false});var i=function(v,y){var w="";if(y!=null&&y!=""){var x=y.split("_");for(var u=0;u<(x.length-1);u++){if(v!=x[u]){w+=x[u]+"_"}}}return w};$(".price-input").blur(function(){if($.trim($("#minprice").val())!=""&&$.trim($("#maxprice").val())!=""){if(parseInt($("#minprice").val())<parseInt($("#maxprice").val())){}else{$(this).val("")}}});b.find("li").delegate("|","click",function(){var u=$(this).closest(".list_filter_cn");u.find("span:first i").text($(this).text());u.find(".filter_menu").hide();u.removeClass("on")});$("li.list_filter_price").find("li.non_box").click(function(){return false});$("li.list_filter_price").find("input.price-input").focus(function(){$(this).closest(".input-wrapper").addClass("cur")}).blur(function(){$(this).closest(".input-wrapper").removeClass("cur")});$(".spProduct_listbox").delegate("li",{mouseenter:function(){var w=$(this),v=w.find("a > img.non");w.addClass("over");if(v.length>0){var u=v.attr("imgurl");if(u!=undefined){v.attr("src",u).removeAttr("imgurl")}w.find("a > img:first").hide();v.show()}},mouseleave:function(){$(this).removeClass("over");if($(this).find("a > img.non").length>0){$(this).find("a > img:first").show();$(this).find("a > img:last").hide()}}});$(".spProduct_listbox").delegate("li","hover",function(){var v=$(this);if(parseInt(v.attr("s"),0)<=0){return}var u='<span class="pro_size">尺码：';if(v.find("span.pro_size").length==0){var w=v.attr("no");$.post("/productdetail/AjaxGetInventory",{productNo:w},function(x){u+=x+"</span>";if(x!=null&&x!=""){v.find("a.brank_avatar").append(u)}})}});var q=$("div.spProduct_listbox>ul>li");if(q.length>0){var e=[];q.each(function(){e.push($(this).attr("no"))});var o=e.join(",")}$(".price-btn").click(function(){var u=m();if(u.length>1){if(u.substring(u.length-1,u.length)=="-"){u=u.substring(0,u.length-1)}}if(g!=""){u=u+"?price="+g}window.location.href=u});var k=function(u,x,w,v){var y="";$("#"+u).find("ul").find("li").each(function(A,D){if($(D).find("a").attr("class")=="cur"){var B=true;if(j()[v]!=null&&j()[v]!=""){var C=j()[v].split("_");for(var z=0;z<C.length;z++){if(C[z]==$(D).find("a").attr(x).replace("/","~")){B=false}}}if(B){y=y+$(D).find("a").attr(x)+"_";if(u=="lisize"){y=y.replace("/","~")}}}});if(w){if($.trim($("#minprice").val())!=""&&$.trim($("#maxprice").val())!=""){g=$.trim($("#minprice").val())+"-"+$.trim($("#maxprice").val())}if($.trim($("#minprice").val())!=""&&$.trim($("#maxprice").val())==""){g=$.trim($("#minprice").val())+"-*"}if($.trim($("#minprice").val())==""&&$.trim($("#maxprice").val())!=""){g="0-"+$.trim($("#maxprice").val())}}return y};function m(){var x=j();if(f!="0_"){f=f+k("librand","brandno",false,0)}else{f=k("librand","brandno",false,0)}if(f!=null&&$.trim(f)!=""){x[0]=f.substring(0,f.length)}else{x[0]="0"}if(h!="0_"){h=h+k("licolor","colorid",false,1)}else{h=k("licolor","colorid",false,1)}if(h!=null&&$.trim(h)!=""){x[1]=h.substring(0,h.length)}else{x[1]="0"}if(s!="0_"){s=s+k("lisize","sizeno",false,2)}else{s=k("lisize","sizeno",false,2)}if(s!=null&&$.trim(s)!=""){x[2]=s.substring(0,s.length)}else{x[2]="0"}if(p!="0_"){p=p+k("liprice","priceno",true,3)}else{p=k("liprice","priceno",true,3)}if(p!=null&&$.trim(p)!=""){x[3]=p.substring(0,p.length)}else{x[3]="0"}x[4]="0";x[5]="1";if(t!="0_"){t=t+k("listyle","styleno",false,6)}else{t=k("listyle","styleno",false,6)}if(t!=null&&$.trim(t)!=""){x[6]=t.substring(0,t.length)}else{x[6]="0"}x[7]=$("input[name='supplier']:checked").val();var u="";var y=window.location.host;var v=window.location.pathname;var w=v.split("-");y+=w[0];y="http://"+y;$.each(x,function(z,A){if(z!=""&&A!=""&&A!=null){u+="-"+A}});if(u.substr(-1)=="-"){u=u.substring(0,u.length-1)}return y+u}function j(){var w=location.pathname;var v=new Object();if(w.indexOf("-")!=-1){strs=w.split("-");for(var u=1;u<strs.length;u++){v[u-1]=strs[u]}}return v}var l=null;$(".js-epMenuTitle").hover(function(){clearTimeout(l);$(".js-epMenuTitle i").removeClass("arrow-down").addClass("arrow-up");$(".menu-nav-show").stop(true,true).slideDown()},function(){l=setTimeout(function(){$(".menu-nav-show").stop(true,true).slideUp();$(".ep-menu-sub").hide()},50);$(".js-epMenuTitle i").removeClass("arrow-up").addClass("arrow-down")});$(".menu-nav-show").hover(function(){clearTimeout(l);$(".js-epMenuTitle i").removeClass("arrow-down").addClass("arrow-up");$(".menu-nav-show").stop(true,true).slideDown()},function(){l=setTimeout(function(){$(".menu-nav-show").stop(true,true).slideUp();$(".ep-menu-sub").hide()},50);$(".js-epMenuTitle i").removeClass("arrow-up").addClass("arrow-down")});$(".menu-nav-container .j_epMenuNav").hover(function(){$(this).addClass("hover");$(this).find(".ep-menu-sub").stop(true,true).delay(100).fadeIn();clearTimeout(l);$(".js-epMenuTitle i").removeClass("arrow-down").addClass("arrow-up");$(".menu-nav-show").show()},function(){l=setTimeout(function(){$(this).hide()},50);$(".js-epMenuTitle i").removeClass("arrow-up").addClass("arrow-down");$(this).removeClass("hover");$(this).find(".ep-menu-sub").stop(true,true).fadeOut(100)})});