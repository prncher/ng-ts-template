'use strict';

if(window.__karma__) {
	var tests = Object.keys(window.__karma__.files).filter(function (file) {
    		return (/test\.js$/.test(file));
	});
}

require.config({
	paths: {
		angular: 'bower_components/angular/angular',
		ngRoute: 'bower_components/angular-route/angular-route',
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		app:'Scripts/appScripts/app',
		controller:'Scripts/appScripts/controller'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'ngRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	],
	deps: tests,
	callback: window.__karma__ ? window.__karma__.start : null,
	baseUrl: window.__karma__ ? '/base' : '',
});

require([
	'angular',
	'app',
	'controller',
	'ngRoute'
	], function(angular, app, controller) {
		var app = new app.App();
		angular.element(document).ready(function () {
        angular.bootstrap(document, ['App']);
    });
	}
);