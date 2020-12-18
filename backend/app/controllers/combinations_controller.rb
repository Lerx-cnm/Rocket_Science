class CombinationsController < ApplicationController
    def create
        const = 11091
        fuel = Fuel.find_by(name: params[:fuel])
        dist = Distance.find_by(name: params[:distance])
        array = []
        array << fuel.name
        array << distance.name
        array.join("_")
        comb = 
        binding.pry
    end
end