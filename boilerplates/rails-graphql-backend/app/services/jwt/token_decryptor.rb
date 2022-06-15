module Jwt::TokenDecryptor
  extend self

  def call(token)
    decrypt(token)
  end

  private
  def decrypt(token)
    begin
      JWT.decode(token, Rails.application.secret_key_base)
    rescue 
       raise InvalidTokenError
    end
  end
end

class InvalidTokenError < StandardError; end;