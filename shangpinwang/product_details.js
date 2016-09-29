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



	ajax("get","product_details_img.json","",function(data){
		var img1 = JSON.parse(data).img1;
		var ul = $("<ul>")
		for(var i = 0; i < img1.length; i++){
			var li = $("<li style = 'background:url(" + img1[i].title + ") no-repeat center;  background-size:383px 510px;' class = 'goods_img_1080'></li>");
			ul.append(li);

		} //for
		$(".img1").append(ul);


		var  img2 = JSON.parse(data).img2;
		var ul1 = $("<ul>");
		for(var i = 0; i < img2.length; i++){
			var li1 = $("<li style = 'background:url(" + img2[i].title + ") no-repeat center;  background-size:60px 80px;' class = 'goods_img_60'></li>");
			ul1.append(li1);
	/*		li1.click(function(){
				alert(12)
				$(".img1").find("li").eq(i).css("z-index" ,"3")
			})*/
		}
		$(".img_btn").append(ul1);

		var zIndex = 2;
		$(".goods_img_60").click(function(){
			$(this).attr("id","active").siblings().attr("id","");
			$(".goods_img_1080").eq($(this).index()).css("zIndex",zIndex++)
		})


	});	//图片AJAX结尾

	ajax("get","product_details.json","",function(data){
		var goods_brand = JSON.parse(data).goods_brand;
		$(".goods_brand").html(goods_brand[0].title);

		var goods_title = JSON.parse(data).goods_title;
		$(".goods_title").html(goods_title[0].title);

		var goods_tel = JSON.parse(data).goods_tel;
		$(".goods_brand_num").html(goods_tel[0].title);

		var goods_news = JSON.parse(data).goods_news;
		$(".goods_news").html(goods_news[0].title);

		var goods_price = JSON.parse(data).goods_price;
		$(".goods_price").html(goods_price[0].title);

		var goods_exercise = JSON.parse(data).goods_exercise;
		$(".goods_exercise").html(goods_exercise[0].title);

		var goods_color = JSON.parse(data).goods_color;
		$(".color_abc").html(goods_color[0].color_abc);
		var color_img = $("<img src = '" + goods_color[1].color_img + "'/>")
		$(".color_img").append(color_img);
		$(".color_img").css("cursor","pointer");

		//获取尺寸表
		var goods_size = JSON.parse(data).goods_size;
		var size_table = JSON.parse(data).size_table;
		for(var i = 0; i < goods_size.length; i++){	
			if(i == goods_size.length - 1){
				var size_btn = $("<div style = ' background:url(" + goods_size[i].button + ") no-repeat 0 -127px; width:55px; height:20px; margin:8px 10px 0 10px;' class = 'size_btn1'><a href = '#goods2_measurement' style = 'display:block;width:55px; height:20px;'></a></div>")
				size_btn.css("cursor","pointer");

			}else{ 
				var size_btn = $("<button class = 'size_btn'>" + goods_size[i].button + "</button>");
				//实验下
/*				var  size_table = $("<div class = 'size_table'></div>");

				for(var j = 0; j < size_table.length; j++){
					var size_table_btn = $("<div style = 'border-right:1px solid #ccc;border-bottom:1px solid #ccc; text-align:center;width:91px;height:28px; float:left;background:#fff;'>" + size_table[j].title + "</div>");
					$(".size_table").append(size_table_btn);			
				}
				size_btn.append(size_table_btn);


				size_btn.hover(function(){
					$(".size_table").css("display","block");
				},function(){
					$(".size_table").css("display","none");
				});
*/		
				//s实验结束
			}
			$(".size_btn_a1").append(size_btn);
		};


		//鼠标滑过尺码显示详细尺寸表
		var size_table = JSON.parse(data).size_table;
		for(var i = 0; i < size_table.length; i++){
			var size_table_btn = $("<div style = 'border-right:1px solid #ccc;border-bottom:1px solid #ccc; text-align:center;width:91px;height:28px; float:left;'>" + size_table[i].title + "</div>");
			$(".size_table").append(size_table_btn);
		}

		var btn = $(".size_btn")
			
			btn.hover(function(){
				var count  = $(this).index()
				$(".size_table").css("display","block");
				nowCount = count * 56
				$(".size_table").css("left",nowCount)
			},function(){
					$(".size_table").css("display","none");
			});
		
			

/*		$(".goods2_serve_btn").click(function(){
			$(".goods2_serve").css("display","block");
		},function(){
			$(".goods2_serve").css("display","none");
		})
*/





		//鼠标滚动时，内容详情处菜单在页面顶部
		$(window).scroll(function(){
			var _top  = $(document).scrollTop(); 
			//var div2 = $(".list_filter");
			if(_top > 925){
				$(".goods_nav").css("position","fixed").css("top","0");
			}else{
				$(".goods_nav").css("position","absolute").css("top","925px");
			}

		});

	});//内容ajax结尾




		//购物车开始

		if($.cookie("goods") == null){
			var iNow = 0;
			//var shopping_list_mun = null
			var goods_price = null;
		}else{
			iNow = $.cookie("goods")
			goods_price = $.cookie("goods_price")
		}

		$(".buy").click(function(){
			iNow++;
			$(".shopping_num").html(iNow);
			$(".shopping_list").html("");
			var aa = parseInt($.cookie("goods")) * parseInt($.cookie("goods_price"))
			//alert(aa)
			var shopping_list_mun = $("<div class = 'list1'><p class= 'list1'>数量共计:<b>" + iNow + "</b>件</p><p class = 'list2'>金额共计:<b>￥" + aa + "</b></p><a href = '#'>结算</a></div><div class = 'list2'><img src = 'img3/20160920101041137017-174-232.jpg'/><p><span>TOPSHOP</span><span>百搭牛仔拼接休闲夹克 牛仔蓝色</span><span>"+  aa +"</span><i>删除</i></p></div>");
			
			$(".shopping_list").html(shopping_list_mun);
		/*	alert(raw("shopping_list_mun"))*/
			goods_price = $(".goods_price").html()
			$.cookie("goods",iNow,{expires:100});
			$.cookie("goods_price",goods_price,{expires:100})
			//$.cookie("goods_n",shopping_list_mun,{expries:50});
		})








		//购物车结束





	//用户评价选项卡
	$("#goods2_comment").find("button").click(function(){
		$("#goods2_comment").find("button").attr("class","goods2_comment_btn2");
		$("#goods2_comment").find("p").css("display","none");
		$(this).attr("class","goods2_comment_btn1");
		$("#goods2_comment").find("p").eq($(this).parent().index()).css("display","block");
	});
	

});	//结尾括号