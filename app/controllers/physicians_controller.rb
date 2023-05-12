class PhysiciansController < ApplicationController

    def index
         render json: Physician.all

    end
end
