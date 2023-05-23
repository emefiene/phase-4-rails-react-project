class PatientsController < ApplicationController

    def index
        render json: Patient.all

    end

    def create 
  
      @patient = Patient.create(patient_params)
      render json: @patient
    end


    private

    def patient_params 
       params.require(:patient).permit( :first_name, :last_name, :img_url, :phone_number, :date_of_birth )
      #  params.permit(:first_name, :last_name, :img_url, :phone_number, :date_of_birth)
    end
end

