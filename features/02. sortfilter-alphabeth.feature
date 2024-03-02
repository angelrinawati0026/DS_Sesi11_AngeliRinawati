@saucedemo @sortfilter
Feature: Swag Labs - SortFilter - Alphabeth

  @sortza
  Scenario: As a user i want get homepage show all product that have been sorted from Z to A
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button filter and sort
    And Angel click "Name (Z to A)"
    Then Angel should get home page show all product that have been sorted

  @sortaz
  Scenario: As a user i want get homepage show all product that have been sorted A to Z
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button filter and sort
    And Angel click "Name (A to Z)"
    Then Angel should get home page show all product that have been sorted