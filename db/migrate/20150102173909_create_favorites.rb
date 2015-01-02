class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :micropost_id
      t.integer :user_id

      t.timestamps
    end
    add_index :favorites, :user_id, :name => 'user_id_ix'
    add_index :favorites, :micropost_id, :name => 'micropost_id_ix'
  end
end
