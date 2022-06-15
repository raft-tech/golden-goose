class CreateMatters < ActiveRecord::Migration[6.0]
  def change
    create_table :matters do |t|
      t.string :description
      t.string :status
      t.string :permitted_states, array: true, default: []
      t.string :representation

      t.timestamps
    end
  end
end