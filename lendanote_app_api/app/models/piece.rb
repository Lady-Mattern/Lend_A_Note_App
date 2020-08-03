class Piece < ApplicationRecord
    has_many :schools
    has-many :users, through: :schools
end
