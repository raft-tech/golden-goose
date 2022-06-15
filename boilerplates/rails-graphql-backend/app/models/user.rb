class User < ApplicationRecord
  has_one :matter

  def token
    JWT.encode({email: email}, Rails.application.secrets.secret_key_base)
  end

  authenticates_with_sorcery!
end