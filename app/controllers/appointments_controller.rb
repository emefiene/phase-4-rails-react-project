class AppointmentsController < ApplicationController

    def index
       render json: Appointment.all
    end

    def show
        @appointment = Appointment.find(params[:id])
        render json: @appointment, status: :ok
    end

    def create
       appointment = Appointment.create(appointment_params)
       flowsheet = Flowsheet.create(appointment_id: appointment.id)
       render json: appointment, status: :created
    end

    def update
      appointment = Appointment.find(params[:id])
      appointment.update!(appointment_params)
      render json: p, status: :accepted
   end

  def destroy
   appointment = Appointment.find(params[:id])
   appointment.destroy
   head :no_content
  end

    private

    def appointment_params
       user = User.find(session[:user_id])
       if user.role_type == "Patient"
        params.permit(:time, :patient_id, :physician_id, :patient_flowsheet_complete, :appointment_complete)
       elsif user.role_type == "Physician"
        params.permit(:appointment_complete)
       end
    end
   
end
