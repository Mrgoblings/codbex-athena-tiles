const templatesFolder = "/services/web/codbex-athena-tiles/tiling/templates";

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
            templateUrl: `${templatesFolder}/numericTile.html`
        };
    })
    .directive('atChartTile', function () {
        return {
            restrict: 'E',
            scope: {
                perspective: '@',
                title: '@',
                data: '=',
                datasets: '=',
                labels: '='
            },
            link: function (scope, element) {
                scope.$watch('datasets', function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        scope.renderChart();
                    }
                });

                scope.renderChart = function () {
                    var ctx = element.find('#doughnutChart')[0].getContext('2d');
                    new Chart(ctx, {
                        type: 'doughnut',
                        data: {
                            datasets: scope.datasets || [],
                            labels: scope.labels || []
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false
                        }
                    });
                };

                scope.renderChart();
            },
            templateUrl: `${templatesFolder}/chartTile.html`
        };
    });
