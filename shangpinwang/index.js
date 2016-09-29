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
/*----------------------banner--------------------------*/


//轮播图

		//淡入淡出效果
	/*	var speed = 1;
		var time = setInterval(function(){
			
			$("#img_list").find("li").css("display","none");
			$("#img_list").find("li").eq(speed % 5).fadeIn(500);

		speed++	
		},1000);
*/
		//设置ul宽度
		var wli = $("#img_list").find("li").size();
		var uli = $("#img_list").find("li").width();
		var index = $("#img_list").find("li").eq(0).index();
		$("#img_list").css("width", wli * uli)
			
		//轮播图淡入淡出效果
		

		//点击小圆点切换图片
		//$("#img_list li").eq(0).show();
		$("#position li").click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			var index = $(this).index();
			//i = index;
			$("#img_list li").eq(index).fadeIn(500).siblings().fadeOut(500);
		});


		//自动轮播
		var i = 0;
		
		//向右切换
		var play = function(){
			i++;
			i = i > 4 ? 0 : i;
			$("#position li").eq(i).addClass("cur").siblings().removeClass("cur");
			$("#img_list li").eq(i).fadeIn(500).siblings().fadeOut(500);
		}

		var timer = null
		timer = setInterval(play,2000);

		//向左切换
		var playLeft = function(){
			i--;
			i = i < 0 ? 4 : i;
			$("#position li").eq(i).addClass("cur").siblings().removeClass("cur");
			$("#img_list li").eq(i).fadeIn(500).siblings().fadeOut(500);
		}

		//var timer1 =  null;
		//鼠标移入移出效果
		$("#banner_img").hover(function(){
			clearInterval(timer);
			//clearInterval(timer1)
		},function(){
			timer = setInterval(play,2000);
		})

		//点击左右切换s
		$("#banner_l").click(function(){
			playLeft();
		});
		$("#banner_r").click(function(){
			play();
		})



/*----------------------热门潮流--------------------------*/

		ajax("get","main1.json","",function(data){
			var mainL = JSON.parse(data).logo_l;
			for(var i = 0; i < mainL.length; i++){
				var alogo = $("<a href = '#' class = 'alogo'><img src = '" + mainL[i].img+ "'/></a>")

				$(".brand_l").append(alogo);
				alogo.hover(function(){
					$(this).find("img").animate({left:0},300,"linear");
				},function(){
					$(this).find("img").stop(true);
					$(this).find("img").animate({left:8},300,"linear");
				});

			}



			var mainR = JSON.parse(data).logo_r;
			for(var i = 0; i < mainR.length; i++){
				var alogo = $("<a  href = '#' class = 'alogo'><img src = '" + mainR[i].img+ "'/></a>")
				$(".brand_r").append(alogo);


				$(".brand_r").append(alogo);
				alogo.hover(function(){
					$(this).find("img").animate({left:0},300,"linear");
				},function(){
					$(this).find("img").stop(true);
					$(this).find("img").animate({left:8},300,"linear");
				});
			}
			
		});

	

/*----------------------最新上架--------------------------*/

		
		ajax("get","new.json","",function(data){
			var new1 = JSON.parse(data)._new;
			for(var i = 0; i < new1.length; i++){
				var bImg = $("<div class = 'newa'><a href = '#' class = 'bImg'><img src = '" + new1[i].img+ "'/><div class = 'bImg1'>" + new1[i].title + "</div><div class = 'bImg2'>" + new1[i].price + "</div></a></div>")
				
			bImg.find("a").hover(function(){
				$(this).css("border","1px solid #ddd").css("marginTop","-2px")
			},function(){
				$(this).css("border","0").css("marginTop","0");
			});	

			$("#new11").append(bImg);	
			}


		//图片
			var newimg = JSON.parse(data)._newimg;
			for(var i = 0; i < newimg.length; i++){
				var cImg = $("<a href = '#' class = 'cImg'><img class= 'newimga' src = '" + newimg[i].img+ "'/></a>");
				$(".new_list").append(cImg);

				if(i == 1){
					$(".newimga").eq(1).attr("class","newimg1");		
				}
				if(i == 3){
					$(".newimga").eq(2).attr("class","newimg3");
				}
			}
			
		});

/*----------------------女装--------------------------*/
		
		ajax("get","womanlist.json","",function(data){
			//logo图
			var data1 = JSON.parse(data)._logo;
			var eul = $("<ul>");
			for(var i = 0; i < data1.length; i++){
				var eli = $("<li><img src =' " + data1[i].img + "'/> </li>");
				eul.append(eli);
			}
			$("#blogo").append(eul);

			//logo动态

			function startMove(){ 
					eul.animate({left:-130}, 1000, "linear",function(){
						setTimeout(function(){
							stopMove();
						},3000)						
					})
			}

			function stopMove(){				 
					eul.animate({left:0}, 1000, "linear",function(){
						setTimeout(function(){
							startMove();
						},3000)						
					})			
			}

			startMove();
			


			//广告图
			var data2 = JSON.parse(data)._img;
			var eA = $("<a class = 'eA' href = '#'><img src = '" + data2[0].img + "'/></a>");
			$("#bimg").append(eA);

			//商品图
			var data3 = JSON.parse(data)._wares;
			var ful = $("<div>");
			for(var i = 0; i < data3.length; i++){
				var fli = $("<div id = 'wares1'><a href = '#'><div class = 'waresTitle'>"  + data3[i].title + "</div><div class = 'waresBrand'>" + data3[i].brand + "</div><img src = '" + data3[i].img  + "'/></a></div>")
				ful.append(fli);

				fli.hover(function(){
					$(this).find("a").animate({left:0},100,"linear");
				},function(){
					$(this).find("a").stop(true);
					$(this).find("a").animate({left:4},100,"linear");
				});
			};
			$("#bwares").append(ful);



		});

/*----------------------男装--------------------------*/
		
		ajax("get","menwear.json","",function(data){
			//logo图
			var data4 = JSON.parse(data)._logo;
			var eul = $("<ul>");
			for(var i = 0; i < data4.length; i++){
				var eli = $("<li><img src =' " + data4[i].img + "'/> </li>");
				eul.append(eli);
			}
			$("#clogo").append(eul);

			//logo动态
			function startMove(){ 
					eul.animate({left:-130}, 1000, "linear",function(){
						setTimeout(function(){
							stopMove();
						},3000)						
					})
			}

			function stopMove(){				 
					eul.animate({left:0}, 1000, "linear",function(){
						setTimeout(function(){
							startMove();
						},3000)						
					})			
			}

			startMove();


			//广告图
			var data5 = JSON.parse(data)._img;
			var eA = $("<a class = 'eA' href = '#'><img src = '" + data5[0].img + "'/><img src = '" + data5[1].img + "'/></a>");
			$("#cimg").append(eA);

			//商品图
			var data6 = JSON.parse(data)._wares;
			var ful = $("<div>");
			for(var i = 0; i < data6.length; i++){
				var fli = $("<div id = 'wares1'><a href = '#'><div class = 'waresTitle'>"  + data6[i].title + "</div><div class = 'waresBrand'>" + data6[i].brand + "</div><img src = '" + data6[i].img  + "'/></a></div>")
				ful.append(fli);
				fli.hover(function(){
					$(this).find("a").animate({left:0},100,"linear");
				},function(){
					$(this).find("a").stop(true);
					$(this).find("a").animate({left:4},100,"linear");
				});
			};
			$("#cwares").append(ful);

		});

/*----------------------配饰--------------------------*/
		
		ajax("get","decorate.json","",function(data){
			//logo图
			var data7 = JSON.parse(data)._logo;
			var eul = $("<ul>");
			for(var i = 0; i < data7.length; i++){
				var eli = $("<li><img src =' " + data7[i].img + "'/> </li>");
				eul.append(eli);
			}
			$("#dlogo").append(eul);

			//logo动态
			function startMove(){ 
					eul.animate({left:-130}, 1000, "linear",function(){
						setTimeout(function(){
							stopMove();
						},3000)						
					})
			}

			function stopMove(){				 
					eul.animate({left:0}, 1000, "linear",function(){
						setTimeout(function(){
							startMove();
						},3000)						
					})			
			}

			startMove();

			//广告图
			var data8 = JSON.parse(data)._img;
			var eA = $("<a class = 'eA' href = '#'><img src = '" + data8[0].img + "'/><img src = ' " + data8[1].img + "'/></a>");
			$("#dimg").append(eA);

			//商品图
			var data9 = JSON.parse(data)._wares;
			var ful = $("<div>");
			for(var i = 0; i < data9.length; i++){
				var fli = $("<div id = 'wares1'><a href = '#'><div class = 'waresTitle'>"  + data9[i].title + "</div><div class = 'waresBrand'>" + data9[i].brand + "</div><img src = '" + data9[i].img  + "'/></a></div>")
				ful.append(fli);
				fli.hover(function(){
					$(this).find("a").animate({left:0},100,"linear");
				},function(){
					$(this).find("a").stop(true);
					$(this).find("a").animate({left:4},100,"linear");
				});
			};
			$("#dwares").append(ful);

		});

/*----------------------本周热门--------------------------*/

		
		ajax("get","popular.json","",function(data){
			var popular = JSON.parse(data).popular;
			for(var i = 0; i < popular.length; i++){
				var dImg = $("<div class = 'hot1'><a href = '#' class = 'dImg'><img src = '" + popular[i].img+ "'/><div class = 'dImg1'>" + popular[i].title + "</div><div class = 'dImg2'>" + popular[i].price + "</div></a></div>")
				$("#Popular1").append(dImg);
				dImg.find("a").hover(function(){
					$(this).css("border","1px solid #ccc");
				},function(){
					$(this).css("border","0")
				})
			}
		});

		});
	