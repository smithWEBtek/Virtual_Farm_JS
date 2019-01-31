class FarmSerializer < ActiveModel::Serializer
  attributes :id , :name ,:description
  has_many :animals
end
