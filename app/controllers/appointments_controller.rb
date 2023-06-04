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

   #  def userName
   #     # user = User.find_by(id: session[:user_id])
   #     user = User.find(params[:id])
   #     upcoming_appointments = user.role.appointments.select { |appt| appt.appointment_complete == false }
   #     render json: upcoming_appointments
   #    #  render json: Appointment.all
   #  end

   #  get '/userName', to: 'appointments#user_name'

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
