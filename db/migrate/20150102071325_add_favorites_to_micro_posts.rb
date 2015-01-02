class AddFavoritesToMicroPosts < ActiveRecord::Migration
  def change
    add_column :microposts, :favorites, :integer, :default => 0
  end
end
