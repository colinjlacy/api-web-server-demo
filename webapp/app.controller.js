/**
 * Created by colinjlacy on 9/15/15.
 */
angular.module('myApp')
	.controller('asyncCtrl', function($scope, $http, ApiUrl) {
		console.log('Controller Start');
		$http.get(ApiUrl)
			.success(function(data) {
				console.log(data);
				$scope.products = data;
			})
			.error(function(err) {
				console.log(err);
			});
		console.log('Controller End');
	});