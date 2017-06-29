
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

