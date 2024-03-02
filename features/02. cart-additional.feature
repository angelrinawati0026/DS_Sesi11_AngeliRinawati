@saucedemo @cart
Feature: Swag Labs - Remove Product Feature

  @removeproduct
  Scenario: As a user i want remove product that have been added before
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart
    Then Angel click icon cart
    Then Angel should navigate to cart page
    Then Angel click icon remove
    Then Angel should get Sauce Labs Bike Light remove from cart
