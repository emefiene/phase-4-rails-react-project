class AppointmentsController < ApplicationController

    def index
       render json: Appointment.all
    end

    def show
        @appointment = Appointment.find(params[:id])
        render json: @appointment
    end


end
