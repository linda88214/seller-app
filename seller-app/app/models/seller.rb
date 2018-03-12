class Seller < ApplicationRecord
	has_many :stocks

	validates_presence_of :username
	validates :username, length: (1..10), uniqueness: true
	validates :password, length: (6..12), allow_nil: true

	attr_reader :password

	def self.find_from_credentials(username, password)
		user = find_by(username: username)
		return nil unless user
		user if user.is_password?(password)
	end

	def is_password?(password_attempt)
		BCrypt::Password.new(password_digest).is_password?(password_attempt)
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end
end
