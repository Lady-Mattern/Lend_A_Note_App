class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :school_name
      t.string :region
      t.integer :user_id
      t.integer :piece_id

      t.timestamps
    end
  end
end
