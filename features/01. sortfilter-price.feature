@saucedemo @sortfilter
Feature: Swag Labs - SortFilter - Price

  @sorthighlow
  Scenario: As a user i want get homepage show all product that have been sorted from highest to lowlest price
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button filter and sort
    And Angel click "Price (high to low)"
    Then Angel should get home page show all product that have been sorted

  @sortlowhigh
  Scenario: As a user i want get homepage show all product that have been sorted from lowlest to highest price
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button filter and sort
    And Angel click "Price (low to high)"
    Then Angel should get home page show all product that have been sorted