class ChangeIntegerLimitInFuels < ActiveRecord::Migration[6.1]
  def change
    change_column :fuels, :kjoules, :integer, limit: 32
  end
end
