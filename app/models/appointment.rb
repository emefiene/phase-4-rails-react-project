class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :physician
  
  has_one :flowsheet, dependent: :destroy
end
