class DistancesController < ApplicationController
    def index 
        distances = Distance.all
        render json: distances.to_json(except: [:created_at, :updated_at])
    end

    def show 
        distance = Distance.find_by(name: params[:id])
        render json: distance.to_json(except: [:created_at, :updated_at])
    end

end