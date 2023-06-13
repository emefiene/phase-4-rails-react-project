class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create]

    def create
       user = User.find_by(username:params[:username])
    if user&.authenticate(params[:password])
        session[:user_id] = user.id
        session[:user_role] = user.role_type
        render json: user, status: :ok
    else 
        render json: {errors: "Invalid Password or Username"}, status: :unauthorized
    end
    end


    def destroy
        session.delete(:user_id)
        session.delete(:user_role)
          head :no_content
    end
   

end