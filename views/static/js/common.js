// 模块化的开始  引入模块化的依赖文件   最后回调函数 接受 依赖文件的产出的结果当做形参，传入函数中
								    // (一定注意形参的顺序。要和依赖文件产出的结果顺序一致）
define(["jquery","template","cookie"],function($,template){
	// template 渲染的功能
	var inform = JSON.parse($.cookie("inform"));
	var strtpl = template("tpl",inform);
	$("#infrom").html(strtpl);
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

