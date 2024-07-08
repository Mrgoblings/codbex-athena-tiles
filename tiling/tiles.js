angular.module('applicationTiles', [])
    .directive('atNumericTile', function () {
        return {
            restrict: 'E',
            transclude: false,
            replace: true,
            scope: {
                perspective: '@',
                title: '@',
                subtitle: '@?',
                numericData: '<',
                footerText: '@?',
                isFloatingNumber: '<?',
                tail: '@?'
            },
            link: function (scope) {
                if (!scope.footerText) {
                    scope.today = new Date();
                }
            },
            templateUrl: "/services/web/codbex-athena-tiles/tiling/templates/numericTile.html"
        };
    });