class Fuel < ApplicationRecord
    belongs_to :combination, optional: true
end