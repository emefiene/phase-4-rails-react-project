class FlowsheetSerializer < ActiveModel::Serializer
  attributes :id, :reason_for_visit, :location, :duration, :Blood_pressure, :temperature, :pulse, :oxygen_saturation, :height, :weight, :bmi, :doctor_notes
  # has_one :appointment

  belongs_to :appointment
  
end
