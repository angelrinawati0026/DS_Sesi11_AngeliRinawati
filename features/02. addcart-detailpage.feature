@saucedemo @addtocart
Feature: Swag Labs - Addtocart - DetailPage

  @addcartfromdetail
  Scenario: As a user i want product already add to cart
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    Then Angel click product "Sauce Labs Backpack" should get detail product properly
    Then Angel click button Add to cart at sauce Labs Backpack
    Then Angel should get auce Labs Backpack already add to cart