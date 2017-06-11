define(["jquery","cookie"], function($) {
    //实现登录功能
    $("#loginid").click(function() {
        $.ajax({
            type: "post",
            url: "/api/login",
            data: $("#loginForm").serialize(),
            dataType: "json",
            success: function(data) {
                if (data.code == 200) {
                    // 将用户名及图片地址存入cookie
                    $.cookie("loginInfo",JSON.stringify(data.result),{path:"/"});
                    location.href = "/index/index";
                }
            }
        })
        return false;
    });
})
