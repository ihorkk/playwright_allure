# redmine.org tests


## Requirements

 - [node.js](https://nodejs.org/)
 - [Playwright](https://playwright.dev/)
 - [Allure report](https://docs.qameta.io/allure-report/)


## Setup

1. Clone this repository to your local machine
2. Download node.js (preferable 16.x version)
3. Enter the following command to your terminal in the root folder:
      ```bash
       npm install
      ```

## Execute

You will find scripts to run the tests in the package.json file:

- To execute all tests open a terminal and enter:
    `test`
- To execute specific test enter:
    `test:single`
- To generate allure report:
    `report:generate`
- To open generated report in browser:
    `report:open`
- To clean previous report results:
    `report:clean`


## Project structure

`tests` folder contains tests
`pages` folder contains all selectors that are required for testing
`allure-report` folder contains all necessary files to open report in browser
