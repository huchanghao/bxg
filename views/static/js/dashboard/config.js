
//  配置模块化的文件
require.config({
    //  baseUrl 当前模块化的当前起始路径  
    baseUrl:"/views",
    paths:{
    //  依赖文件存放的地址，以别名的方式，下次使用别名引入依赖的文件
        "jquery":"assets/jquery/jquery.min",
        "from":"assets/jquery-form/jquery.form",
        "cookie":"assets/jquery-cookie/jquery.cookie",
        "template":"assets/artTemplate/template"
    }
})