$(function(){
		//导航栏——————————————————————————
			var oul = $("<ul>");
			var p1 = $("<p class='p1'></p>");
			
			ajax("get","nav.json","",function(data){
				var arr = JSON.parse(data).hot;

				//P1
				for(var i = 0; i < arr.length; i++){
					var oli = $("<li>");
					oli.html(arr[i].title);
					oul.eq(0).append(oli);
				}
				p1.append(oul);
				$(".nav_list").append(p1);

				//p2
				var aul = $("<ul>");
				var p2 = $("<p class='p2'></p>");
				var arr1 = JSON.parse(data).women_dress1;
				for(var i = 0; i < arr1.length; i++){
					var ali = $("<li>");
					ali.html(arr1[i].title);
					aul.eq(0).append(ali);
				}
				p2.append(aul);

				//导航栏图片
				var navImg = JSON.parse(data).img;
				var aDiv = $("<div class = 'nav_img'></div>");
				for(var i = 0; i < navImg.length; i++){
					var aaa = $("<img src = '" + navImg[i].img + "' />")
					aDiv.append(aaa);
				}
				p2.append(aDiv);
				//运动
				var speed = 1;
				var time = setInterval(function(){
					$(".nav_img").find("img").css("display","none");
					$(".nav_img").find("img").eq(speed % 3).fadeIn(500);
					speed++
				},1000);

				
				$(".nav_list").append(p2);


				//p3
				var bul = $("<ul>");
				var p3 = $("<p class='p3'></p>");
				var arr2 = JSON.parse(data).brand;
				for(var i = 0; i < arr2.length; i++){
					var bli = $("<li>");
					bli.html(arr2[i].title);
					bul.eq(0).append(bli);
				}
				p3.append(bul);
				$(".nav_list").append(p3);

				//p4
				var arr3 = JSON.parse(data).img1;
				var p4 = $("<p class='p4'><img src = '" + arr3[0]._href +"'/></p>");
				$(".nav_list").append(p4);
		
			});

			//鼠标划过时显示下拉菜单栏
			var navL = $(".nav_ul").find(".nav_h");
			var navB = $(".nav_ul").find(".nav_list");
			for(var i = 0; i < navL.length; i++){
				$(".nav_h").eq(i).hover(function(){
					$(".nav_list").eq(i).css("display","block");
				},function(){
					$(".nav_list").eq(i).css("diaplay","none");
				})
			}




			//购物车————————————————————————————————

			$(".shopping_box").hover(function(){
				$(".shopping_list").slideDown(120, function(){
					$(".shopping_box").css("display", "block"); 
				});
			},function(){
				$(".shopping_list").slideUp(300);
			});


			$(".nav_h").hover(function(){
				$(".nav_list").eq(0).css("display","block");
			},function(){
				$(".nav_list").eq(0).css("display","none");
			});
			
})