class CreateFlowsheets < ActiveRecord::Migration[6.1]
  def change
    create_table :flowsheets do |t|
      t.string :reason_for_visit
      t.string :location
      t.string :duration
      t.integer :Blood_pressure
      t.integer :temperature
      t.integer :pulse
      t.integer :oxygen_saturation
      t.integer :height
      t.integer :weight
      t.integer :bmi
      t.string :doctor_notes
      t.belongs_to :appointments, null: false, foreign_key: true

      t.timestamps
    end
  end
end
