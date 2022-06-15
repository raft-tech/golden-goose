module Types
  class AdversePartyType < Types::BaseObject
    field :first_name, String, null: true
    field :last_name, String, null: true
  end
end
