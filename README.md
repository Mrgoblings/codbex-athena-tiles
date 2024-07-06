# Athena Generic Tiles

This repository contains generic tiles implemented as AngularJS directives for the Athena project. These tiles are designed to be reusable and styled consistently across different applications.

## Overview

The purpose of this project is to create a set of generic tiles based on the examples from the Hestia project. These tiles will be used to enhance the Athena project by providing a consistent and reusable UI component library.

## Tiles Implemented

### NumericTile

The [NumericTile](https://github.com/Mrgoblings/codbex-athena-tiles/tree/main/tiling/documentation/at-numeric-tile.md) directive displays a numeric value with customizable styling. It is designed to be flexible and easy to integrate into any AngularJS application.

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

Reffer to the documentation [here](https://github.com/Mrgoblings/codbex-athena-tiles/tree/main/tiling/documentation/)

## Process Flow

The following diagram illustrates the process flow for submitting and processing an expense:

![Process Flow Diagram](https://github.com/Mrgoblings/codbex-athena-tiles/assets/80454439/1582e5df-ee4c-466e-a626-c18c2a83f118)

## References

The design and functionality of these tiles are based on the examples from the Hestia project, specifically the dashboard file located at [Hestia Dashboard](https://github.com/codbex/codbex-hestia-dashboard/blob/main/codbex-hestia/subviews/dashboard.html).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

