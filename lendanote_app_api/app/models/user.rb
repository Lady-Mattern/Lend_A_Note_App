class User < ApplicationRecord
    validates :email, uniqueness: true
    # validates :password, length: {minamum: 5}
    has_secure_password
    has_many :pieces
end
