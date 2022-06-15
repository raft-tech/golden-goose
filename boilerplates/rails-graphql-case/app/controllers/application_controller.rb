class ApplicationController < ActionController::Base
  def authenticate
    render json: {errors: 'Unauthorized'}, status: 401 unless current_user
  end
 
  def current_user
    @current_user ||= Jwt::UserAuthenticator.(request.headers)
  end
end
