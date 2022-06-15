# frozen_string_literal: true

module Types
  class UserInput < Types::BaseInputObject
    description 'Attributes for creating a user'
    argument :email, String, required: true 
    argument :password, String, required: true 
  end
end 