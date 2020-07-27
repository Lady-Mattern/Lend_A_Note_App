class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :school
      t.string :region
      t.string :email
      t.string :phone
      t.string :password_digest

      t.timestamps
    end
  end
end
