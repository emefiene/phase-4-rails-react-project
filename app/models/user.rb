class User < ApplicationRecord
    belongs_to :role, polymorphic: true
end
