class CreatePieces < ActiveRecord::Migration[6.0]
  def change
    create_table :pieces do |t|
      t.string :title
      t.string :composer_arranger
      t.string :instrumentation
      t.string :difficulty

      t.timestamps
    end
  end
end
