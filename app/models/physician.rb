class Physician < ApplicationRecord
    has_one :user, as: :role
    
    has_many :appointments
    has_many :patients, through: :appointments
    # has_one_attached :img_url
end
