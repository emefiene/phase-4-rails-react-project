class PhysiciansController < ApplicationController

    def index
         render json: Physician.all

    end

    def create 
      @physician = Physician.create(physician_params)
      render json: @physician
    end


    private

    def physician_params
      params.permit(:first_name, :last_name, :phone_number, :img_url, :bio, :city, :speciaty, :years_of_experience, :rating)
    end
end
