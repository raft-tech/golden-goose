Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:8080' # Need's updating to final deployed app

    resource '/cors',
      :headers => :any,
      :methods => [:post],
      :max_age => 0

    resource '*',
      :headers => :any,
      :methods => [:get, :post, :delete, :put, :patch, :options, :head],
      :max_age => 0
  end
end
