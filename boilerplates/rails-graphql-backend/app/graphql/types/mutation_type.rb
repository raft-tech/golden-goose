# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :loginUser, mutation: Mutations::LoginUser
  end
end