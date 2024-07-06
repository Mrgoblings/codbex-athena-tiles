# Athena Generic Tiles

This repository contains generic tiles implemented as AngularJS directives for the Athena project. These tiles are designed to be reusable and styled consistently across different applications.

## Overview

The purpose of this project is to create a set of generic tiles based on the examples from the Hestia project. These tiles will be used to enhance the Athena project by providing a consistent and reusable UI component library.

## Tiles Implemented

### NumericTile

The `NumericTile` directive displays a numeric value with customizable styling. It is designed to be flexible and easy to integrate into any AngularJS application.

## Installation

To install the generic tiles in your project, follow these steps:

1. Add the `codbex-athena-tiles` repository as a dependency in your `project.json` file:
    ```json
    {
        "guid": "codbex-athena",
        "dependencies": [
            {
                "guid": "codbex-athena-tiles",
                "type": "git",
                "url": "https://github.com/Mrgoblings/codbex-athena-tiles.git",
                "branch": "main"
            }
        ],
        "actions": [
            {
                "name": "Build TypeScript",
                "commands": [
                    {
                        "os": "unix",
                        "command": "tsc"
                    },
                    {
                        "os": "windows",
                        "command": "cmd /c tsc"
                    }
                ],
                "registry": "true"
            }
        ]
    }
    ```

2. After adding the dependency, ensure that your project is built correctly by executing the build actions defined in your `project.json`.

## Usage

To use the `NumericTile` directive in your application, follow these steps:

1. Add the necessary script references in your HTML file:
    ```html
    <script src="path/to/angular.js"></script>
    <script src="path/to/athena-tiles.js"></script>
    ```

2. Include the `athena-tiles` module in your AngularJS application:
    ```javascript
    angular.module('yourApp', ['athenaTiles']);
    ```

3. Use the `NumericTile` directive in your HTML:
    ```html
    <numeric-tile title="Your Title" numeric-data="yourNumericData"></numeric-tile>
    ```

## Example

Here is an example of how to integrate and use the `NumericTile` directive in your project:

1. Add the script references in your `index.html`:
    ```html
    <!DOCTYPE html>
    <html ng-app="yourApp">
    <head>
        <title>Athena Project</title>
        <script src="path/to/angular.js"></script>
        <script src="path/to/athena-tiles.js"></script>
    </head>
    <body>
        <div ng-controller="MainController">
            <at-numeric-tile title="Product Count" numeric-data="3" perspective="">
            </at-numeric-tile>

            <at-numeric-tile title="Product Price" numeric-data="7" perspective="" subtitle="last month"
                footer-text="BGN" is-floating-number="true">
            </at-numeric-tile>
        </div>
    </body>
    </html>
    ```

2. Define your AngularJS application and add athenaTiles as a dependancy in `app.js`:
    ```javascript
    angular.module('yourApp', ['athenaTiles'])
    ```

    ### The result should look something like this:
    <img width="229" alt="image" src="https://github.com/Mrgoblings/codbex-athena-tiles/assets/80454439/26abad73-6b5d-44f7-a3a5-528d1a86faaf">



## Process Flow

The following diagram illustrates the process flow for submitting and processing an expense:
![image](https://github.com/Mrgoblings/codbex-athena-tiles/assets/80454439/1582e5df-ee4c-466e-a626-c18c2a83f118)


## References

The design and functionality of these tiles are based on the examples from the Hestia project, specifically the dashboard file located at [Hestia Dashboard](https://github.com/codbex/codbex-hestia-dashboard/blob/main/codbex-hestia/subviews/dashboard.html).


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
