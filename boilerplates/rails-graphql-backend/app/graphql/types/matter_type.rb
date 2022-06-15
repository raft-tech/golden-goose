module Types
  class MatterType < Types::BaseObject
    field :description, String, null: true
    field :status, String, null: true
    field :permitted_states, [String], null: true 
    field :representation, String, null: true
    field :notes, [Types::NoteType], null: true
    field :adverse_party, Types::AdversePartyType, null: true
  end
end