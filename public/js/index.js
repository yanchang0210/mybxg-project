define(["jquery,util"],function($,util){
	// 设置导航菜单选中
	// var pathname=location.pathname;
	// $(".aside .nav a").removeClass("active");
	// $(".aside .nav a[href="+pathname+"]").addClass("active");

	util.setMenu(location.pathname);

});