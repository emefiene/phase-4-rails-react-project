class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :patient_flowsheet_complete, :appointment_complete
  # has_one :patient
  # has_one :physician
  # belongs_to :flowsheet
  has_one :flowsheet
  belongs_to :physician, serializer: PhysicianSerializer
  belongs_to :patient, serializer: PatientSerializer
end
