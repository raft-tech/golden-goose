class User < ApplicationRecord
  has_one :matter

  authenticates_with_sorcery!
end
