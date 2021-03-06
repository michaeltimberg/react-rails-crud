
# Except throwing an exception, we’ll make the controller throw a `null_session` because we’re going to request json, which is different to the html (which is requested by default).

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
end
