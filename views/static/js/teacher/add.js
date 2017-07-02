define(["jquery","template","from","bootstrap-datepicker","bootstrap-datepicker.zh-CN","jquery-validate"],function($,template){
    
           var LocString=String(window.document.location.href);
            function GetQueryString(str){
                var rs=new RegExp("(^|)"+str+"=([^&]*)(&|$)","gi").exec(LocString),tmp;
                if(tmp=rs)return tmp[2];
                // return "没有这个参数";
            }
            var id = decodeURI(GetQueryString("tc_id"));
            console.log(id);
            if(id =="undefined"){
                // 添加功能
                  $(".tc_join_date").datepicker({
                    format:"yyyy-mm-dd",
                    language:"zh-CN"
                  })
                $(".btn_add").click(function(){
                    //   var tc_name  = $(".tc_name").val();
                    //   var tc_pass = $(".tc_pass").val();
                    //   var tc_join_date = $(".tc_join_date").val();
                    //   var tc_type = $(".tc_type").val();
                    //   var tc_gender = "0";
                    //   $(".sex input").each(function(i,v){
                    //       if($(v).prop("checked")){
                    //         tc_gender = $(v).val()
                    //       }

                    //   })
                    //   $.ajax({
                    //     url:"/api/teacher/add",
                    //     type:"post",
                    //     data:{
                    //        tc_name:tc_name,
                    //         tc_pass:tc_pass,
                    //         tc_join_date:tc_join_date,
                    //         tc_type:tc_type,
                    //         tc_gender:tc_gender
                    //     },
                    //     success:function(data){
                    //         console.log(data)
                    //     }
                    //   })

                    $("#biaodan").validate({
                        // 表单是否自动提交
                        sendForm:false,
                        onBlur:true,
                        valid:function(){
                              $("#biaodan").ajaxSubmit({
                                url:"/api/teacher/add",
                                type:"post",
                                success:function(data){
                                    console.log(data)
                                    if(data.code ==200){
                                        location.href="/teacher/list";
                                    }
                                }
                            })
                        },
                        eachValidField: function(){
                            // console.log(this)
                            this.parent().parent().removeClass("has-error").addClass("has-success");
                        },
                        eachInvalidField: function(){
                            // console.log(this)
                            
                            this.parent().parent().removeClass("has-success").addClass("has-error");
                        },
                        description: {
                            "username": {
                                // 非空严重的内容
                                required: "用户名不能为空",
                                // 正则匹配不符合的内容
                                pattern:"用户名不规范",
                             
                            },
                            "pass": {
                                required: "请输入密码",
                               
                            },
                            "data":{
                                required: "请输入日期",
                            
                            }
                        }
                    })
                    
                  
                    
                })

               
            }else{
            // 编辑功能
             $("#mbx").html("编辑讲师");
             $.ajax({
                 url:"/api/teacher/edit",
                 type:"get",
                 data:{
                     tc_id:id
                 },
                 success:function(data){
                    var html = template("teachupdata",data);
                    $("#updata").html(html);    

                    $(".tc_join_date").datepicker({
                        format:"yyyy-mm-dd",
                        language:"zh-CN"
                    })



                    // 点击编辑按钮
                     $(".btn_add").click(function(){
                            $("#biaodan3").ajaxSubmit({
                                url:"/api/teacher/update",
                                type:"post",
                                data:{
                                    tc_id:id
                                },
                                success:function(data){
                                    if(data.code==200){
                                        location.href="/teacher/list";
                                    }
                                }

                            })
                     }) 


                 }
             })


    }

});