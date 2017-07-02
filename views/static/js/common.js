// 模块化的开始  引入模块化的依赖文件   最后回调函数 接受 依赖文件的产出的结果当做形参，传入函数中
								    // (一定注意形参的顺序。要和依赖文件产出的结果顺序一致）

define(["jquery","template","cookie"],function($,template){
	if(!($.cookie("PHPSESSID"))||!($.cookie("inform"))){
		if(location.pathname == "/dashboard/login"){
			return;
		}
		location.href="http://www.studyit.com/dashboard/login";
	}

	
     $(".cjl").click(function(){
		  $(this).siblings("li").children("a").removeClass("active");
		   $(this).children("a").addClass("active");
		  

	 });
	 $(".navs li a").each(function(i,v){
		if($(v).attr("href") == location.pathname){
			$(v).parent().parent().show();
			$(v).addClass("active");
			$(v).parent().parent().parent().children("a").removeClass("active");
		
		}	
	 })

	if (!("/dashboard/login" == location.pathname)){
		// template 渲染的功能
			var inform = JSON.parse($.cookie("inform"));
			var strtpl = template("tpl",inform);
			$("#infrom").html(strtpl);	
	}
		
	    
	  $(".navs ul li ul").parent().click(function(){
		  	$(this).children("a").removeClass("active");
            $(this).children("ul").slideToggle();
	   });
	  
//       退出功能呢
	$("#quit").click(function(){
		$.ajax({
			url:"api/logout",
			tye:"post",
			success:function(data){
			location.href="http://www.studyit.com/dashboard/login";
			}
		})
	});
});

