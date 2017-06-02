#The routing for the controller has to consider the fact that it’s within two namespaces; API and V1. We’ll do this using the namespace method.

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :items, only: [
          :index,
          :create,
          :destroy,
          :update
      ]
    end
  end
end
