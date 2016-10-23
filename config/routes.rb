Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  get 'notifications', to: 'notifications#index'

  devise_scope :user do
    authenticated :user do
      root 'hello_world#index', as: :authenticated_root
    end
    unauthenticated do
      root to: 'devise/sessions#new'
    end
  end
end
