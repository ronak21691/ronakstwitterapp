class ChangeFavoritestoFavoritedToMicroposts < ActiveRecord::Migration
  def change
    rename_column :microposts, :favorites, :favorite_count
  end
end
