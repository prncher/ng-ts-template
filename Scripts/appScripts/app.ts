//
// Copyright (c) Prince Cheruvathur. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';
import AppCtrlsModule = require("controller");

export class App {
    constructor() {
        var ngApp = angular.module('App', ["ngRoute"]);
        ngApp.controller('AppController', () => new AppCtrlsModule.AppController());
    }
}