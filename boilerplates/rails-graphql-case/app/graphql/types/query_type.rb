module Types
  class QueryType < Types::BaseObject
    field :user, Types::UserType, null: true do
      argument :email, String, required: true
    end

    def user(email:)
      User.find_by(email: email)
    end

    field :viewer, Types::ViewerType, null: true do
      argument :id, Integer, required: true
    end

    def viewer(id:)
      User.find(id)
    end
  end
end
