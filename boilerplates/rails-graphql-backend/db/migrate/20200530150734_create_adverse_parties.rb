class CreateAdverseParties < ActiveRecord::Migration[6.0]
  def change
    create_table :adverse_parties do |t|
      t.string :first_name
      t.string :last_name
      t.references :matter, null: false, foreign_key: true

      t.timestamps
    end
  end
end