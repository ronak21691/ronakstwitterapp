class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :micropost
  validates :user_id, presence: true
end
