Feature: User Registration
  As a new user
  I want to register an account
  So that I can access the system

  Scenario: Successful user registration
    Given the registration system is available
    When I submit registration with username "doejohn", name "John Doe", email "jdoe@gmail.com", password "password@123" and confirmPassword "password@123"
    Then I should receive a successful registration message
