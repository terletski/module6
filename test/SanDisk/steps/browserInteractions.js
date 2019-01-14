/* eslint-disable no-undef */
"use strict";
let { When } = require(`cucumber`);

const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const angularManager = require(path.resolve(`./test/SanDisk/utils/angularManager.js`)).isAngular;
const stepFunctions = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`));
const highlightElement = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).highlightElement;

When(/^I open "([^"]*)" url$/, (url) => {
  logger.info(`I open ${url} url`);
  return browser.get(url);
});

When(/^I switch to "([^"]*)" tab$/, async (number) => { // next, previous, any number
  logger.info(`I switch to ${number} tab`);
  const tab = await stepFunctions.getTab(number);
  browser.switchTo().window(tab);
  browser.ignoreSynchronization = await angularManager;
  return browser.refresh(1000);
});

When(/^I highlight "([^"]*)"$/, (alias) => {
  logger.info(`I highlight ${alias}`);
  return highlightElement(alias);
});
