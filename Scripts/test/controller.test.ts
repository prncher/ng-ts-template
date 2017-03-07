//
// Copyright (c) Prince Cheruvathur. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//
'use strict';

define(['app', 'controller','angularMocks'], (app,AppController) => {
	describe('App module', function() {
		var $controller, $rootScope, $scope;
		beforeEach(angular.mock.module('App'));
		describe('my app controller', () => {
			it('test the controller', inject(($controller, $rootScope)=> {
				//spec body
				$scope = $rootScope.$new();
				var ctrl = $controller('AppController', { $scope: $scope });
				expect(ctrl).toBeDefined();
				expect(ctrl.name).toEqual('John Doe');
			}));
		});

			it('test the controller', inject(($controller, $rootScope) => {
				//spec body
				$scope = $rootScope.$new();
				var ctrl = $controller('AppController', { $scope: $scope });
				expect(ctrl).toBeDefined();
				expect(ctrl.name).toEqual('John Doe');
				ctrl.name = 'Scott';
				expect(ctrl.name).toEqual('Scott');
			}));
	});
});

