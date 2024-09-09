Feature: Login to SauceDemo

Scenario: Login as standart user
  When: I visit SauceDemo page
  Then: Login page shoud be displayed
  When: I login as standart user
  Then: I should be redirected to Products List page