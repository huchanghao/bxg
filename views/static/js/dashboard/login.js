define(["jquery","from","cookie"],function($){
        $("#inform").submit(function(){
        $(this).ajaxSubmit({
            url:"/api/login",
            type:"post",
            success:function(data){
                $.cookie("inform",JSON.stringify(data.result),{
                    path:"/"
                });
                // console.log(data.result)
                console.log(data)
                location.href="http://www.studyit.com";
            }
        })
        return false;
    })
      
})