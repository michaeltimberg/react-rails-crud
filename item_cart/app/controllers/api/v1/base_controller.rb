#The base_controller will have global rules that apply to all of our API-based controllers.

class Api::V1::BaseController < ApplicationController
  respond_to :json
end