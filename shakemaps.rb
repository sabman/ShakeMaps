require 'rubygems'
require 'sinatra'
require 'haml'
require 'open-uri'

get '/' do
  haml :shakemaps
end

get '/proxy' do
  open params["url"]
end