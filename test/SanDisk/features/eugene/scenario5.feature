@all
Feature: SHOP --> Search

  @eugene @eugene5
  Scenario: Searching
    Given I open "https://www.sandisk.com/" url
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
      And I click "Search Icon"
      And I highlight "Search Field"
    Then "Search Field" should be visible
    When I type "iPad" in "Search Field"
      And I highlight "Search Button"
      And I click "Search Button"
    Then Count of "List of products by search" should not be "0"
