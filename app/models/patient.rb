class Patient < ApplicationRecord
    validates :last_name,  presence: true

    has_one :user, as: :role
    
    has_many :appointments
    has_many :physicians, through: :appointments
end
