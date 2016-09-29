
$(function(){


ajax("get","brand_list2.json","",function(data){


		var brand1 = JSON.parse(data)._brand;
		var p1 = $("<p>");
		var bp1 = $("<div>")
		for(var i = 0; i < brand1.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(brand1[i].title);
				bp.eq(0).attr("class","bp");
				p1.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(brand1[i].title);
				bspan.attr("class","bspan");
				bp1.append(bspan)
			}
		}
		bp.append(bp1);
		$(".brand_abc").append(p1);




		var a = JSON.parse(data).a;
		var p2 = $("<p>");
		var bp2 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(a[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp1");
				p2.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(a[i].title);
				bspan.attr("class","bspan");
				bp2.append(bspan)				
			}
		}	
		bp.append(bp2);
		$(".brand_abc").append(p2);


		var b = JSON.parse(data).b;
		var p3 = $("<p>");
		var bp3 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(b[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp2");
				p3.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(b[i].title);
				bspan.attr("class","bspan");
				bp3.append(bspan)				
			}
		}	
		bp.append(bp3);
		$(".brand_abc").append(p3);


		var c = JSON.parse(data).c;
		var p3 = $("<p>");
		var bp3 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(c[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp3");
				p3.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(c[i].title);
				bspan.attr("class","bspan");
				bp3.append(bspan)				
			}
		}	
		bp.append(bp3);
		$(".brand_abc").append(p3);

		var c = JSON.parse(data).d;
		var p3 = $("<p>");
		var bp3 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(c[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp4");
				p3.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(c[i].title);
				bspan.attr("class","bspan");
				bp3.append(bspan)				
			}
		}	
		bp.append(bp3);
		$(".brand_abc").append(p3);



		var c = JSON.parse(data).e;
		var p3 = $("<p>");
		var bp3 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(c[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp5");
				p3.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(c[i].title);
				bspan.attr("class","bspan");
				bp3.append(bspan)				
			}
		}	
		bp.append(bp3);
		$(".brand_abc").append(p3);


		var c = JSON.parse(data).f;
		var p3 = $("<p>");
		var bp3 = $("<div>")
		for(var i = 0; i < a.length; i++){
			if(i == 0){
				var bp = $("<p>");
				bp.html(c[i].title);
				bp.eq(0).attr("class","bp");
				bp.eq(0).attr("id","bp6");
				p3.append(bp);
			}else{
				var bspan = $("<a>");
				bspan.html(c[i].title);
				bspan.attr("class","bspan");
				bp3.append(bspan)				
			}
		}	
		bp.append(bp3);
		$(".brand_abc").append(p3);

/*		var _p = $(".bp");
		var _x = $("all_brand1 button");
		for(var i = 0; i < _x.length; i++){
			_x[i].index = i;
			_x[i].click(function(){
				for(var i = 0; i < _p.length; i++){
					_x[i].css("offsetleft_top" ,"0")
				}
			})
		}*/

		$(".women_l1").mouseover(function(){
			$(this).css("cursor","pointer")
		});
		$(".women_l2").find("a").mouseover(function(){
			$(this).css("cursor","pointer")
		});




	});

})




