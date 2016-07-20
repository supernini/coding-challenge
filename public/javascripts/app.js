(function () {

    'use strict';

    var app = angular.module("app", []);

    app.controller('formController', function($scope, $http) {
        $scope.formData = {};
        
        $scope.processForm = function() {
            $scope.errorUsername = (!$scope.formData.username || $scope.formData.username.length === 0) ? 'You should type your Username' : '';
            $scope.errorPassword = (!$scope.formData.password || $scope.formData.password.length === 0) ? 'Password can\'t be blank' : '';
            $scope.successMessage = '';
            $scope.errorMessage = ''
            if ($scope.errorUsername=='' && $scope.errorPassword=='') {
                $http({
                    method  : 'POST',
                    url     : 'login',
                    data    : $.param($scope.formData),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (data, status, headers, config) {
                    $scope.successMessage = "Yeah !";
                }).error(function (data, status, header, config) {
                    $scope.errorMessage = "Something goes wrong  !";
                })
            } else {
                $scope.errorMessage = "Please check your data, the form cannot be send. Thanks"
            }
        };
    });
})();
