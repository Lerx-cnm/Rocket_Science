class FuelsController < ApplicationController

    def index
        fuels = Fuel.all
        render json: fuels.to_json(except: [:created_at, :updated_at])
    end

    
    def show
        fuel = Fuel.find_by(name: params[:id])
        render json: fuel.to_json(except: [:created_at, :updated_at])
    end
end