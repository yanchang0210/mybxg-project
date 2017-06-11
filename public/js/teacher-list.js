define(["jquery", "template", "bootstrap"], function($, template) {
    // 加载列表数据
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function(data) {
            var html = template("teacherInfoTpl", { list: data.result });
            $("#teacherInfo").html(html);
            // 绑定查看讲师信息的单击事件
            $("#teacherInfo").find(".preview").click(function() {
                var tcId = $(this).closest("td").attr("data-id");
                // 请求数据
                $.ajax({
                    type: "get",
                    url: "/api/teacher/view",
                    data: { tc_id: tcId },
                    dataType: "json",
                    success: function(data) {
                        data.result.tc_hometown = data.result.tc_hometown.split('|').join(' ');
                        var html = template('teacherModalInfoTpl', data.result);
                        $('#teacherModalInfo').html(html);
                        // 显示弹窗
                        $('#teacherModal').modal();

                    }
                })
                return false;
            });
        }
    })
})
