angular.module('applicationTiles', [])
    .directive('atNumericTile', ['SplitPaneState', function () {
        return {
            restrict: 'E',
            transclude: false,
            scope: {
                perspective: '@',
                title: '@',
                subtitle: '@?',
                numericData: '<',
                footerText: '@?',
                isFloatingNumber: '<?'
            },
            controller: ['$scope', function ($scope) {
                if (!$scope.footerText) {
                    $scope.today = new Date();
                }
            }],
            templateUrl: "/services/web/codbex-athena-tiles/tiling/templates/numericTile.html"
        };
    }]);

