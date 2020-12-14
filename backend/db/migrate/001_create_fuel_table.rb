class CreateFuelTable < ActiveRecord::Migration[5.0]
    def change
        create_table :fuels do |t|
            t.string :name
            t.integer :kjoules

            t.timestamps
        end
    end
end
