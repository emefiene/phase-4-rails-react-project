class PhysicianSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :img_url, :bio, :city, :speciaty, :years_of_experience, :rating
end
