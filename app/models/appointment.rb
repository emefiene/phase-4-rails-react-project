class Appointment < ApplicationRecord
 
  def appointment_params
    user = User.find(session[:user_id])
    if user.role_type == "Patient"
     validates :time, presence: true
     validates :physician_id, presence: true
    end
 end


  belongs_to :patient
  belongs_to :physician
  
  has_one :flowsheet, dependent: :destroy
end
