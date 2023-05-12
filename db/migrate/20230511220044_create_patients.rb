class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :img_url
      t.string :phone_number
      t.string :date_of_birth

      t.timestamps
    end
  end
end
