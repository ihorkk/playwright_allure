# redmine.org tests


## Requirements

1. node.js
2. playwright framework
3. allure reporter


## Setup

1. Clone this repository to your local machine
2. Download node.js (preferable 16.x version)
3. Enter the following commands to your terminal in the root folder:
    * npm install
    * npm init playwright@latest

## Execute

You will find scripts to run the tests in the package.json file:

1. To execute all tests open a terminal and enter:
    - `test`
2. To execute specific test enter:
    - `test:single`
3. To generate allure report:
    - `report:generate`
4. To open generated report in browser:
    - `report:open`
5. To clean previous report results:
    - `report:clean`


## Project structure

`tests` folder contains tests
`pages` folder contains all selectors that are required for testing
`allure-report` folder contains all necessary files to open report in browser