angular.module('StarterApp', ['ngMaterial'])

    .directive('listview', function ($http) {

        return function ($scope) {
            $scope.indices = {
                current: null
            };

            $scope.toggle = false;

            $http.get('task_listview.json')
                .then(function (response) {
                    $scope.results = response.data;
                });

        }

    });