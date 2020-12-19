class CombinationsController < ApplicationController
    def create
        Combination.destroy_all
        fuel = Fuel.find_by(name: params[:fuel])
        dist = Distance.find_by(name: params[:distance])
        array = []
        array << fuel.name
        array << dist.name
        array = array.join("_")
        num = (dist.lightyears * 9461000000000)*4266.00000000/fuel.kjoules
        if num > 1000
            num = num.round()
        elsif num < 0.00001
            num = num
        else
            num = num.round(3)
        end
        comb = Combination.new(name: array, result: num)
        # binding.pry
        comb.save
        fuel.combination_id, dist.combination_id = comb.id


        render json: comb.to_json(except: [:created_at, :updated_at])
    end
end