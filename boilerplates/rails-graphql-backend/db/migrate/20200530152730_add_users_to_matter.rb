class AddUsersToMatter < ActiveRecord::Migration[6.0]
  def change
    add_column :matters, :user_id, :int
    add_foreign_key :matters, :users
  end
end