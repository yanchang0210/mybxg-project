requirejs.config({
    baseUrl: "/public/assets",
    paths: {
        jquery: "jquery/jquery.min",
        bootstrap: "bootstrap/js/bootstrap.min",
        cookie: "jquery-cookie/jquery.cookie",
        common: "../js/common",
        login: "../js/login",
        template: "artTemplate/template-web",
        tealist: "../js/teacher-list"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
});
