Rails.application.routes.draw do
  
  resources :flowsheets
  resources :appointments
  resources :physicians
  resources :patients
  resources :users, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/login', to: 'sessions#create'

  get '/authorized_user', to: 'users#show'

  delete '/logout', to: 'sessions#destroy'

  get 'users/:id/my_appointments', to: 'users#upcoming_appointments'

  get 'users/:id/appointments_complete', to: 'users#completed_appointments'

  get 'users/:id/your_physician', to: 'users#your_physicians'
  
  get 'users/:id/your_patients', to: 'users#your_patients'

end

