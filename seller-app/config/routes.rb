Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :sellers
  resources :stocks
  resources :buyers
  resources :orders
  resources :orderstatuses
  resource :session
end
