@saucedemo @addtocart
Feature: Swag Labs - Addtocart - Homepage

  @addcartfromhome
  Scenario: As a user i want product already add to cart
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart