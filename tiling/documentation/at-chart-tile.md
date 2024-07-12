# Documentation for ChartTile Directive

## ChartTile Directive

The `ChartTile` directive displays data in a doughnut chart format using Chart.js. It is designed to visualize data sets with customizable styling and options.

## Attributes
| Attribute         | Type              | Description                                                                    | Example Usage                          |
|-------------|----------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `perspective`| String        | Specifies the perspective related to the tile.                                                 | `perspective="somePerspective"`                            |
| `title`      | String        | Sets the main title of the chart tile.                                                         | `title="Sales Distribution"`                               |
| `data`       | Object        | Binds the data to be displayed in the left section of the tile.                                | `data="{ 'Category': 'Electronics', 'Total Sales': 250 }"` |
| `datasets`   | Array         | Binds the datasets for the doughnut chart. Each dataset includes `data` and `backgroundColor`. | `datasets="chartData.datasets"`                            |
| `labels`     | Array         | Sets the labels for the segments of the doughnut chart.                                        | `labels="['Red', 'Blue', 'Yellow']"`                       |

## Example

Here is an example of how to integrate and use the `ChartTile` directive in your project:

1. Add the script references in your `index.html`:

    ```html
    <!DOCTYPE html>
    <html ng-app="yourApp">
    <head>
        <title>Athena Project</title>
        <script src="path/to/angular.js"></script>
        <script src="path/to/athena-tiles.js"></script>
        <script src="path/to/chart.js"></script>
    </head>
    <body>
        <div ng-controller="MainController">
            <at-chart-tile title="Sales Distribution"
                           perspective="products"
                           data="{ 'Category': 'Electronics', 'Total Sales': 250 }"
                           datasets="chartData.datasets"
                           labels="['Electronics', 'Books', 'Clothing']">
            </at-chart-tile>
        </div>
    </body>
    </html>
    ```

2. Define your AngularJS application and add `athenaTiles` as a dependency in `app.js`:

    ```javascript
    angular.module('yourApp', ['athenaTiles'])
    ```

### The result should look something like this:
![image](https://github.com/user-attachments/assets/12d94132-b178-4f37-b290-42d6dd61edd7)
