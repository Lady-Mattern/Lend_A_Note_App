class School < ApplicationRecord
    belongs_to :users
    belongs_to :pieces
end
