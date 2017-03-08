requirejs.config({
    baseUrl: "Scripts/appScripts",
    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "app": "./app",
        "angular": "../../bower_components/angular/angular",
        "ngRoute": "../../bower_components/angular-route/angular-route"
    },
    shim: {
        "ngRoute": ['angular']
    }
});

requirejs(["app", "angular", "ngRoute"], (app) => {
    var app = new app.App();

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['App']);
    });
});