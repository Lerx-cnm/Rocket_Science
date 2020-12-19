class CreateCombinationTable <ActiveRecord::Migration[5.0]
    def change
        create_table :combinations do |t|
            t.string :name
            t.float :result, limit: 32

            t.timestamps
        end
    end
end

