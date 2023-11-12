class Patient < ApplicationRecord
    validates :last_name,  presence: true

    has_one :user, as: :role
    
    has_many :appointments
    has_many :physicians, through: :appointments
    # has_one_attached :img_url
end
