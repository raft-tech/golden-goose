module Mutations
  class LoginUser < Mutations::BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true 

    field :user, Types::UserType, null: true 
    field :errors, String, null: true 
    
    def resolve(email:, password:)
      puts context[:cookies].to_json
      user = User.find_by(email: email)
      if user
        begin
          
          user = User.authenticate(email, password) # This method comes from Sorcery

          if user
            token = Jwt::TokenProvider.(user_id: user.id)
            context[:cookies][:jwt] = { :value => token, :httponly => true }
            {
              user: user,
              token: token
            }
          else
            {
              user: nil,
              errors: "Unable to authenticate user"
            }
          end
        end
      else
        {
          user: nil,
          errors: "User Not Found"
        }
      end
    end
  end
end 