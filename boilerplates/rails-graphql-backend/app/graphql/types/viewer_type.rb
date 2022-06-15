module Types
  class ViewerType < Types::BaseObject
    field :matter, Types::MatterType, null: true
  end
end