$(function(){



	if($.cookie("goods") == null){
		$(".shopping_num").html("0");	
		$(".shopping_list").html("暂无商品")	
	}else{
		$(".shopping_num").html($.cookie("goods"));	
	

		var aa = parseInt($.cookie("goods")) * parseInt($.cookie("goods_price"))

		var shopping_list_mun = $("<div class = 'list1'><p class= 'list1'>数量共计:<b>" + $.cookie("goods") + "</b>件</p><p class = 'list2'>金额共计:<b>￥" +  aa  + "</b></p><a href = '#'>结算</a></div><div class = 'list2'><img src = 'img3/20160920101041137017-174-232.jpg'/><p><span>TOPSHOP</span><span>百搭牛仔拼接休闲夹克 牛仔蓝色</span><span>"+  aa +"</span><i>删除</i></p></div>");
		$(".shopping_list").html(shopping_list_mun);

	}






	ajax("get", "women_nav.json","",function(data){

		var data1 = JSON.parse(data).jacket1;
		var ap = $("<div>");
		for(var i = 0; i < data1.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap);


		var data2 = JSON.parse(data).jacket2;
		var ap2 = $("<div>");
		for(var i = 0; i < data2.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap2);


		var data3 = JSON.parse(data).jacket3;
		var ap3 = $("<div>");
		for(var i = 0; i < data3.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap3);



		var data4 = JSON.parse(data).jacket4;
		var ap4 = $("<div>");
		for(var i = 0; i < data4.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap4);


		var data5 = JSON.parse(data).jacket5;
		var ap5 = $("<div>");
		for(var i = 0; i < data5.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap5);


		var data6 = JSON.parse(data).jacket6;
		var ap6 = $("<div>");
		for(var i = 0; i < data6.length; i++){
			if(i == 0){
				var adiv = $("<div>");
				adiv.html(data1[i].title);
				ap.append(adiv);
				adiv.eq(0).attr("class","adiv");
			}else{
				var aspan = $("<a>");
				aspan.html(data1[i].title);			
				aspan.attr("class","aspan");
				ap.append(aspan);
			}
		}
		$(".women_l2").append(ap6);

	});


	//选项卡

	

//选框点击效果
	
	//品牌
	
	$(".brand_list1").toggle(function(){
		$(".brand_list2").css("display","block");
		$(".brand_list1").attr("class","border_none");
		$(".bg_icon").attr("class","border_p");
	},function(){
		$(".brand_list2").css("display","none");
		$(".border_none").attr("class","brand_list1")
		$(".border_p").attr("class","bg_icon");
	});

		$(".brand_list2").mouseleave(function(){
			$(".brand_list2").css("display","none")
			$(".border_none").attr("class","brand_list1")
			$(".border_p").attr("class","bg_icon");
		})

		$(".brand_list1").mouseleave(function(){
			$(".brand_list2").css("display","none")
			$(".border_none").attr("class","brand_list1")
			$(".border_p").attr("class","bg_icon");
		})
		$(".brand_list2").mouseenter(function(){
			$(".brand_list2").css("display","block")
			$(".brand_list1").attr("class","border_none");
			$(".bg_icon").attr("class","border_p");
		})
		$(".brand_list1").mouseenter(function(){
			$(".brand_list2").css("display","block")
			$(".brand_list1").attr("class","border_none");
			$(".bg_icon").attr("class","border_p");
		})


//颜色

	$(".color_list1").toggle(function(){
		$(".color_list2").css("display","block");
		$(".color_list1").attr("class","color_none");
		$(".bg_icon1").attr("class","border_p1");
	},function(){
		$(".color_list2").css("display","none");
		$(".color_none").attr("class","color_list1")
		$(".border_p1").attr("class","bg_icon1");
	})


	$(".color_list1").mouseleave(function(){
		$(".color_list2").css("display","none");
		$(".color_none").attr("class","color_list1")
		$(".border_p1").attr("class","bg_icon1");
	})

	$(".color_list2").mouseleave(function(){
		$(".color_list2").css("display","none");
		$(".color_none").attr("class","color_list1")
		$(".border_p1").attr("class","bg_icon1");
	})

	$(".color_list1").mouseenter(function(){
		$(".color_list2").css("display","block");
		$(".color_list1").attr("class","color_none");
		$(".bg_icon1").attr("class","border_p1");
	})

	$(".color_list2").mouseenter(function(){
		$(".color_list2").css("display","block");
		$(".color_list1").attr("class","color_none");
		$(".bg_icon1").attr("class","border_p1");
	})



//尺码

	$(".size_list1").toggle(function(){
		$(".size_list2").css("display","block");
		$(".size_list1").attr("class","size_none");
		$(".bg_icon2").attr("class","border_p2");
	},function(){
		$(".size_list2").css("display","none");
		$(".size_none").attr("class","size_list1")
		$(".border_p2").attr("class","bg_icon2");
	})


	$(".size_list2").mouseleave(function(){
		$(".size_list2").css("display","none");
		$(".size_none").attr("class","size_list1")
		$(".border_p2").attr("class","bg_icon2");
	})

	$(".size_list1").mouseleave(function(){
		$(".size_list2").css("display","none");
		$(".size_none").attr("class","size_list1")
		$(".border_p2").attr("class","bg_icon2");
	})

	$(".size_list1").mouseenter(function(){
		$(".size_list2").css("display","block");
		$(".size_list1").attr("class","size_none");
		$(".bg_icon2").attr("class","border_p2");
	})

	$(".size_list2").mouseenter(function(){
		$(".size_list2").css("display","block");
		$(".size_list1").attr("class","size_none");
		$(".bg_icon2").attr("class","border_p2");
	})


//价格

	$(".price_size1").toggle(function(){
		$(".price_size2").css("display","block");
		$(".price_size1").attr("class","price_none");
		$(".bg_icon3").attr("class","border_p3");
	},function(){

		$(".price_size2").css("display","none");
		$(".price_none").attr("class","price_size1")
		$(".border_p3").attr("class","bg_icon3");
	})


	$(".price_size1").mouseleave(function(){
		$(".price_size2").css("display","none");
		$(".price_none").attr("class","price_size1")
		$(".border_p3").attr("class","bg_icon3");		
	})

	$(".price_size2").mouseleave(function(){
		$(".price_size2").css("display","none");
		$(".price_none").attr("class","price_size1")
		$(".border_p3").attr("class","bg_icon3");		
	})

	$(".price_size1").mouseenter(function(){
		$(".price_size2").css("display","block");
		$(".price_size1").attr("class","price_none");
		$(".bg_icon3").attr("class","border_p3");		
	})

	$(".price_size2").mouseenter(function(){
		$(".price_size2").css("display","block");
		$(".price_size1").attr("class","price_none");
		$(".bg_icon3").attr("class","border_p3");		
	})



//价格区间

	$(".sort_list1").toggle(function(){
		$(".sort_list2").css("display","block");
		$(".sort_list1").attr("class","sort_none");
		$(".bg_icon4").attr("class","border_p4");
	},function(){
		$(".sort_list2").css("display","none");
		$(".sort_none").attr("class","sort_list1")
		$(".border_p4").attr("class","bg_icon4");
	});



	$(".sort_list1").mouseleave(function(){
		$(".sort_list2").css("display","none");
		$(".sort_none").attr("class","sort_list1")
		$(".border_p4").attr("class","bg_icon4");
	})

	$(".sort_list2").mouseleave(function(){
		$(".sort_list2").css("display","none");
		$(".sort_none").attr("class","sort_list1")
		$(".border_p4").attr("class","bg_icon4");
	})

	$(".sort_list1").mouseenter(function(){
		$(".sort_list2").css("display","block");
		$(".sort_list1").attr("class","sort_none");
		$(".bg_icon4").attr("class","border_p4");
	})

	$(".sort_list2").mouseenter(function(){
		$(".sort_list2").css("display","block");
		$(".sort_list1").attr("class","sort_none");
		$(".bg_icon4").attr("class","border_p4");
	})





$(window).scroll(function(){
	var _top  = $(document).scrollTop(); 
	//var div2 = $(".list_filter");
	if(_top > 215){
		$(".list_filter").css("position","fixed").css("top","0");
	}else{
		$(".list_filter").css("position","absolute").css("top","131px");
	}

})
	

});





