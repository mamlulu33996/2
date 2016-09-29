﻿(function(a){function b(d,c,e){d=a(d)?a(d):d;if(!e){d.addClass(c).siblings().removeClass(c)}else{d.addClass(c).siblings(e).removeClass(c)}}a.fn.spTabs=function(m){var n={tabId:"",tabTag:"",conId:"",conTag:"",curClass:"cur",loadTxt:"数据加载中...",act:"click",dft:0,effact:null,auto:false,autotime:3000,aniSpeed:500};a.extend(n,m);var p=false;var j=0;var c=a(this);var s=a(n.tabId);var g=a(n.conId);var q=s.find(n.tabTag);var d=g.find(n.conTag);var l=q.length;var r=parseInt(s.css("height"));var f=g.get(0).offsetWidth;var e=g.get(0).offsetHeight;var h=q.eq(n.dft);b(h,n.curClass);d.eq(n.dft).show().siblings(n.conTag).hide();if(n.effact=="scrollx"){var o=parseInt(d.css("padding-left"))+parseInt(d.css("padding-right"));c.css({position:"relative",height:r+e+"px",overflow:"hidden"});g.css({width:l*f+"px",height:e+"px",position:"absolute",top:r+"px"});d.css({"float":"left",width:f-o+"px",display:"block"})}if(n.effact=="scrolly"){var o=parseInt(d.css("padding-top"))+parseInt(d.css("padding-bottom"));c.css({position:"relative",height:r+e+"px",overflow:"hidden"});s.css({"z-index":100});g.css({width:"100%",height:l*e+"px",position:"absolute","z-index":99});d.css({height:e-o+"px","float":"none",display:"block"})}q.each(function(k){q.eq(k).bind(n.act,function(){b(this,n.curClass);j=k;function t(u,w){var v=u;var x=w.attr("rel");if(x){v.html(n.loadTxt);a.ajax({url:x,cache:false,success:function(y){v.html(y);v.attr("changed","true")},error:function(){v.html("数据加载错误，请重试！")}})}}if(q.eq(k).attr("rel")){t(d.eq(k),q.eq(k))}if(d.eq(k).attr("changed")=="true"){q.eq(k).removeAttr("rel")}switch(n.effact){case"slow":d.eq(k).show("slow").siblings(n.conTag).hide("slow");break;case"fast":d.eq(k).show("fast").siblings(n.conTag).hide("fast");break;case"scrollx":g.animate({left:-k*f+"px"},n.aniSpeed);break;case"scrolly":g.animate({top:-k*e+r+"px"},n.aniSpeed);break;case"fade":d.eq(k).fadeIn(n.aniSpeed).siblings(n.conTag).hide("fast");break;default:d.eq(k).show().siblings(n.conTag).hide();break}})});if(n.auto){var i=function(){if(n.act=="mouseover"){q.eq(j).mouseover()}else{if(n.act=="click"){q.eq(j).click()}}j++;if(j==l){j=0}};p=setInterval(i,n.autotime);a(n.conTag).hover(function(){clearInterval(p)},function(){p=setInterval(i,n.autotime)})}}})(jQuery);(function(d,a,b){var c=(function(){var g=function(j){return j instanceof a?j:(function(){var k=a(j);return k.length==0?null:k})()},i=function(k,j){this.last(k);this.current(j)},f={wrapper:null,contentWrapper:null,first:null,trigger:"click",effector:"direct",curClass:"cur",onchange:null,auto:false,autotime:3000},e={direct:function(){var k=this.last(),j=this.current();this.getContent(k).stop(true).hide();this.getContent(j).show()},fade:function(){var k=this.last(),j=this.current();this.getContent(k).stop(true).hide();this.getContent(j).fadeIn(200)}},h=function(n){var j=a.extend({},f,n),l=null,k=null,m=j.onchange;this.getSetting=function(){return a.extend({},j,true)};this.last=function(o){if(typeof o!=="undefined"){l=o}return l};this.current=function(o){if(typeof o!=="undefined"){k=o}return k};this.onchange=function(o){if(Object.prototype.toString.call(o)==="Function"){m=o}return m};this.init()};h.prototype={constructor:h,init:function(){var r=this.getSetting(),y=g(r.wrapper),l=g(r.contentWrapper),x=r.trigger,q=r.onchange,v=this,u=y.find("*[tabid]"),n,t=u.length,o=r.auto,w=null,p=0;this.wrapper=function(){return y};this.contentWrapper=function(){return l};if(t>0&&y!=null){n=r.first||u.eq(0).attr("tabid");v.change(n);y.delegate("[tabid]",x,function(){var z=a(this),s=z.attr("tabid"),k=l.find("[tabcontent='"+s+"']");v.change(s);p=z.index();if(z.attr("rel")&&k.attr("changed")!="true"){j(k,z)}});var j=function(k,z){var s=k;var A=z.attr("rel");if(A){a.ajax({url:A,cache:false,success:function(B){s.html(B);s.attr("changed","true")},error:function(){s.html("数据加载错误，请重试！")}})}};if(o){var m=function(){alert("");var k=u.eq(p).attr("tabid"),s=y.find("[tabid='"+k+"']");$conWrp=l.find("[tabcontent='"+k+"']");v.change(k);if(s.attr("rel")&&$conWrp.attr("changed")!="true"){j($conWrp,s)}p++;if(p==t){p=0}};w=setInterval(m,r.autotime);a(l).hover(function(){clearInterval(w)},function(){w=setInterval(m,r.autotime)})}}},change:function(n){var p=this.getSetting(),j=p.contentWrapper,o=this.onchange(),l=this.current(),m,k=p.curClass;if(l!==n){m=p.effector;this.getIndexer(n).addClass(k).siblings().removeClass(k);i.call(this,l,n);o&&o.call(this);if(typeof m=="string"&&typeof e[m]!="undefined"){e[m].call(this)}else{if(a.isFunction(m)){m.call(this)}}}},getIndexer:function(j){return this.wrapper().find("[tabid='"+j+"']")},getContent:function(j){return this.contentWrapper().find("[tabcontent='"+j+"']")}};return h})();b.plug.tab={create:function(e){return new c(e)}}})(window,jQuery,SP,undefined);(function(a){a.fn.spTips=function(c){var b={tipID:"",closeID:"",act:"click",speed:200};var c=a.extend(b,c);a(this).bind(b.act,function(){a(this).find(b.tipID).fadeIn(b.speed);setTimeout(function(){a(".favorTips").fadeOut()},1000);return false});a(b.closeID).click(function(){a(b.tipID).fadeOut();return false});a(document).bind("click",function(d){var f=a(d.srcElement||d.target);if(f.attr("class")!="hendelnBox_tips"){a(".hendelnBox_tips").hide()}})}})(jQuery);