Rails.application.routes.draw do

resources :fuels, only: [:index, :show]
resources :distances, only: [:index, :show]
resources :combinations

end
