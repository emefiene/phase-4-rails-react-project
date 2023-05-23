class UsersController < ApplicationController

    def index
        render json: User.all

    end

    def show
  
        render json: current_user, status: :ok
    end
    

    def create
       
        user = User.create!(params_user)
        if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
        end
    end

     private

     def params_user
        
        params.permit(:username, :password, :role_id, :role_type)
    end

end
