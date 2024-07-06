angular.module('applicationTiles', [])
    .directive('atNumericTile', ['SplitPaneState', function () {
        return {
            restrict: 'E',
            transclude: false,
            scope: {
                perspective: '@',
                title: '@',
                subtitle: '@?',
                numericData: '=',
                footerText: '@?'
            },
            controller: ['$scope', function ($scope) {
                if (!$scope.footerText) {
                    $scope.today = new Date();
                }
            }],
            templateUrl: "/services/web/codbex-athena-tiles/templates/numericTile.html"
        };
    }]);

