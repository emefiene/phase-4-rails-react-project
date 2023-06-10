class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok

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

    def upcoming_appointments
        user = User.find(params[:id])
        upcoming_appointments = user.role.appointments.select { |apt| apt.appointment_complete == false }
        render json: upcoming_appointments, status: :ok
     end

     def completed_appointments
        user = User.find(params[:id])
        completed_appointments = user.role.appointments.select { |apt| apt.appointment_complete == true}
        render json: completed_appointments, status: :ok
     end

     def your_physicians
        user = User.find(params[:id])
        your_physicians = user.role.physicians.uniq
        render json: your_physicians, status: :ok
     end

     def your_patients
        user = User.find(params[:id])
        your_patients = user.role.patients.uniq
        render json: your_patients, status: :ok
     end

     private

     def params_user
        
        params.permit(:username, :password, :role_id, :role_type)
    end

end
