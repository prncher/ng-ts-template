"use strict";
import AppCtrlsModule = require("controller");

export class App {
    constructor() {
        var ngApp = angular.module('App', ["ngRoute"]);
        ngApp.controller('AppController', () => new AppCtrlsModule.AppController());
    }
}