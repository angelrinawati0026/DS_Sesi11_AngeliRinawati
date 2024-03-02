@saucedemo @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page

 