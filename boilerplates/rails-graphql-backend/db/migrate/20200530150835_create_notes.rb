class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :body
      t.references :matter, null: false, foreign_key: true
      t.timestamps
    end
  end
end