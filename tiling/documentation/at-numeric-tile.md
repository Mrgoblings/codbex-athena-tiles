# Documentation for NumericTile Directive

## NumericTile Directive

The `NumericTile` directive displays a numeric value with customizable styling. It is designed to be flexible and easy to integrate into any AngularJS application.

## Attributes

| Attribute         | Type              | Description                                                                    | Example Usage                          |
|-------------------|-------------------|--------------------------------------------------------------------------------|----------------------------------------|
| `perspective`     | String            | Specifies the perspective related to the tile.                                 | `perspective="somePerspective"`        |
| `title`           | String            | Sets the main title of the numeric tile.                                       | `title="Numeric Tile Example"`         |
| `subtitle`        | String (optional) | Provides an optional subtitle for the numeric tile.                            | `subtitle="Optional Subtitle"`         |
| `numericData`     | Number            | Binds the numeric data to be displayed in the tile.                            | `numeric-data="3"`                     |
| `footerText`      | String (optional) | Sets the text to display in the footer of the tile.                            | `footer-text="Optional footer text"`   |
| `isFloatingNumber`| Boolean (optional)| Determines if the numeric data should be displayed as a floating point number. | `is-floating-number="true"`            |
| `tail`            | String (optional) | Specifies a suffix to be appended to the numeric data.                         | `tail="%"`                             |

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

            <at-numeric-tile title="Product Price" numeric-data="79" perspective="" subtitle="last month"
                footer-text="BGN" is-floating-number="true" tail="%">
            </at-numeric-tile>
        </div>
    </body>
    </html>
    ```

2. Define your AngularJS application and add `athenaTiles` as a dependency in `app.js`:

    ```javascript
    angular.module('yourApp', ['athenaTiles'])
    ```

### The result should look something like this:
![Example Image](https://github.com/Mrgoblings/codbex-athena-tiles/assets/80454439/26abad73-6b5d-44f7-a3a5-528d1a86faaf)

