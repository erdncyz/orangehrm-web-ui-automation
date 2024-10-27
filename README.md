# OrangeHRM Automation

This repository contains automated UI tests for the OrangeHRM web application using Playwright and TypeScript.

## Project Structure

- **pages/**: Page Object Models for different pages of the OrangeHRM application.
- **tests/**: Test cases that utilize the page objects to automate UI interactions.
- **test-results/**: Directory where test results are stored.
- **playwright.config.ts**: Playwright configuration file.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Setup

1. Clone the repository:
git clone https://github.com/your-username/orangehrm-automation.git


2. Navigate to the project directory:
cd orangehrm-automation

3. Install dependencies:
npm install

## Running Tests

- To execute all tests, run the following command:
npx playwright test

- Or specific run command
npx playwright test tests/createNewAdminUser.spec.ts

- For headless mode:
npx playwright test --headless

## Configuration
You can adjust the test configuration in the playwright.config.ts file to modify browser settings, test timeout, and more.

## Reporting
Test results will be automatically saved in the test-results/ folder. You can also generate HTML reports by running:
npx playwright show-report