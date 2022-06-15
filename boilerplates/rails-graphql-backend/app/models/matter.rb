class Matter < ApplicationRecord
  has_many :notes 
  has_one :adverse_party
  belongs_to :user
end