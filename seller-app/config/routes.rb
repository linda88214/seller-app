Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :stocks
  resources :buyers
  resources :orders
  resources :orderstatuses
  resource :session

  get 'isLoggedIn', :to => 'users#is_logged_in'
  post 'users/login', :to => 'users#login'

end
