//
// Copyright (c) Prince Cheruvathur. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
requirejs.config({
    baseUrl: "Scripts/dist/appScripts",
    paths: {
        'jquery': '../../../bower_components/jquery/dist/jquery.min',
        'app': './app',
        'angular': '../../../bower_components/angular/angular',
        'ngRoute': '../../../bower_components/angular-route/angular-route'
    },
    shim: {
        'ngRoute': ['angular']
    }
});

requirejs(['app', 'angular', 'ngRoute'], (app) => {
    var app = new app.App();

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['App']);
    });
});