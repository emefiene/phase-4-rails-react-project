Rails.application.routes.draw do
  
  resources :flowsheets
  resources :appointments
  resources :patients
  resources :physicians
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
