class PhysiciansController < ApplicationController

    def index
         render json: Physician.all, status: :ok

    end

    def create 
      @physician = Physician.create(physician_params)
      render json: @physician, status: :created
    end

    def show
      physician = Physician.find(params[:id])
      render json: physician, status: :ok
    end


    private

    def physician_params
      params.require(:physician).permit( :first_name, :last_name, :phone_number, :img_url, :bio, :city, :specialty, :years_of_experience )
    end
end
