class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :patient_flowsheet_complete, :appointment_complete
  has_one :patient
  has_one :physician
end
