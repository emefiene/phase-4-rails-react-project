class CreateFlowsheets < ActiveRecord::Migration[6.1]
  def change
    create_table :flowsheets do |t|
      t.string :reason_for_visit
      t.string :location
      t.string :duration
      t.string :Blood_pressure
      t.string :temperature
      t.string :pulse
      t.string :oxygen_saturation
      t.string :height
      t.string :weight
      t.string :bmi
      t.string :doctor_notes
      t.belongs_to :appointment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
