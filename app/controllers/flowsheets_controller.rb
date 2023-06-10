class FlowsheetsController < ApplicationController
    
    def index
       render json: Flowsheet.all, status: :ok

    end

    def show
      @flowsheet = Flowsheet.find(params[:id])
      render json: @flowsheet, status: :ok
    end

    def update

      @flowsheet = Flowsheet.find(params[:id])
      if session[:user_role] == "Patient"
        @flowsheet.update(flowsheet_patient_params)
        render json: @flowsheet, status: :accepted
      elsif session[:user_role] == "Physician"
        @flowsheet.update(flowsheet_physician_params)
        render json: @flowsheet, status: :accepted
      end

    end

    private

    def flowsheet_patient_params
       params.permit(:reason_for_visit, :location, :duration)
    end

    def flowsheet_physician_params
       params.permit(:Blood_pressure, :temperature, :pulse, :oxygen_saturation, :height, :weight, :bmi, :doctor_notes)
    end
end

