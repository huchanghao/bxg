define(["jquery","template","bootstrap"],function($,template){
    $.ajax({
        url:"/api/teacher",
        type:"get",
        success:function(data){
            if(data.code == 200){
                var html = template("teachertpl",data);
                $("#itme").html(html);
            }
        }
    })
    //注销和启用功能
    $("#itme").on("click",".btn_qz",function(){
      var id = $(this).parent().attr("id");
      var staus = $(this).attr("tc_staus");
      var that = $(this);
      $.ajax({
          url:"/api/teacher/handle",
          type:"post",
          data:{
           tc_id:id,
           tc_status:staus
          },
          success:function(data){
            if(data.code ==200){
                if(data.result.tc_status == 1) {
                        that.removeClass("btn-warning");
						that.addClass("btn-success");
                        that.attr("tc_staus",data.result.tc_status);
						that.text("启 用");
                } else if(data.result.tc_status == 0){
                     that.removeClass("btn-warning");
						that.addClass("btn-warning");
                        that.attr("tc_staus",data.result.tc_status);                        
						that.text("注 销");
                }


            }
          }
      })

    })
    // 添加功能
    $(".btn_add").click(function(){
      location.href="/teacher/add";
    });

     $("#itme").on("click",".btn_updata",function(){
        var tc_id = $(this).parent().attr("id");
        location.href="/teacher/add?tc_id="+tc_id+"";
    })

    // 查看功能
    $("#itme").on("click",".look",function(){
      var id =  $(this).parent().attr("id");
      $.ajax({
          url:"/api/teacher/view",
          type:"get",
          data:{
              tc_id:id
          },
          success:function(data){
            console.log(data)
            var html = template("teachlook",data);
              $("#teacherModal").html(html).modal("show");
          }
      })
    
    })

})
    