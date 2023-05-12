class Patient < ApplicationRecord
    has_one :user, as: :role
    has_many :appointments
    has_many :physicians, through: :appointments
end
