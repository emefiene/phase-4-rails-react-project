class PatientsController < ApplicationController

  skip_before_action :authorized_user, only: [:index, :create]

    def index
        render json: Patient.all, status: :ok

    end

    def create 
  
      @patient = Patient.create(patient_params)
      render json: @patient, status: :created
    end


    private

    def patient_params 
       params.require(:patient).permit( :first_name, :last_name, :img_url, :phone_number, :date_of_birth )
    end
end

