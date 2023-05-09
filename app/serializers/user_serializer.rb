class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :role_id, :role_type, :role_id
end
