class PhysicianSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :img_url, :bio, :city, :specialty, :years_of_experience, :rating
  has_one :user
end
