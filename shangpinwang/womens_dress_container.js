$(function(){

	ajax("get","womens_dress.json","",function(data){
		var oul = $("#oul");
		var oli = $("#oul").find("li");
		var data = JSON.parse(data).data;
		for(var i = 0; i < data.length; i++){
			var div1 = $("<div class = 'div1'><p class = 'women_img'><img src = '" + data[i].img + "' class = 'women_img1'/><img src = '"  + data[i].img2 + "'  class = 'women_img2'/><a href = '#' class = 'w_size'>" + data[i].size + "</a></p><h4>" + data[i].news + "</h4><a href = '#' class = 'w_brand'> " + data[i].brand + "</a> <a href = '#' class = 'w_title'>" + data[i].title +"</a> <a href = '#' class = 'w_price'>" + data[i].price + "</a></div>");			
			/*var news = $(".div1").find("h4").html();
			if(news != undefined){
				 $(".div1").find("h4").css("border","1px solid #ccc");
			}*/
			$("#oul").find("li").eq(i % 4).append(div1);


			$(".div1").hover(function(){
				$(this).css("cursor","pointer")
				$(this).find(".women_img2").css("zIndex","2");
				$(this).css("border","1px solid #ccc")
				$(this).find(".w_size").css("display","block");
				(this).find(".w_size").css("zIndex","3");
			},function(){
				$(this).find(".women_img2").css("zIndex","0");
				$(this).css("border","none")
				$(this).find(".w_size").css("display","none");
			});

		}

		$("#oul").find("li").eq(0).wrapInner("<a href = 'product_details.html'></a>");

	});

});