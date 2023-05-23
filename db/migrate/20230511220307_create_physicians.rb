class CreatePhysicians < ActiveRecord::Migration[6.1]
  def change
    create_table :physicians do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :img_url
      t.string :bio
      t.string :city
      t.string :specialty
      t.integer :years_of_experience
      t.float :rating

      t.timestamps
    end
  end
end
