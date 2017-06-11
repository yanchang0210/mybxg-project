// NProgress.start();

// NProgress.done();


define(["jquery","cookie"], function($) {
    // 控制左侧菜单的展开和折叠

    $('.navs ul').prev('a').on('click', function() {
        $(this).next().slideToggle();
    });
    //实现退出功能
    $("#logout").click(function() {
        $.ajax({
            type: "post",
            url: "/api/logout",
            datatype: "json",
            success: function(data) {
                location.href = "/login";
            }
        })
    });
    //  判断用户输入的地址，如果未登录过，需要跳转到login页面
    var pathname=location.pathname;
    //判断用户是否已经登录，并且输入的网址不是login
    if(pathname != "/login" && !$.cookie("PHPSESSID")) {
        location.href="/login";
    }

    //获取用户登录的cookie
    var loginInfo=$.cookie("loginInfo") && JSON.parse($.cookie("loginInfo"));
    if(loginInfo) {
        $('.aside .profile').find('img').attr('src',loginInfo.tc_avatar);
        $('.aside .profile').find('h4').text(loginInfo.tc_name);
    }

})
